const toggleButton = document.getElementById("dark-toggle");
const greetingElement = document.getElementById("greeting");
const personalMessage = document.getElementById("personal-message");
const nameInput = document.getElementById("name-input");
const saveNameBtn = document.getElementById("save-name-btn");

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const emptyMessage = document.getElementById("empty-message");
const sortSelect = document.getElementById("sort-select");
const projectsContainer = document.getElementById("projects-container");

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const formMessage = document.getElementById("form-message");

const githubContainer = document.getElementById("github-container");
const apiStatus = document.getElementById("api-status");

let currentFilter = localStorage.getItem("projectFilter") || "all";
let currentSort = localStorage.getItem("projectSort") || "newest";

/* ===== Greeting by Time ===== */
function setGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.textContent = "Good Morning ☀";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good Afternoon 🌤";
    } else {
        greetingElement.textContent = "Good Evening 🌙";
    }
}

/* ===== Dark Mode with localStorage ===== */
function loadTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode";
    }
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
});

/* ===== Save Visitor Name ===== */
function loadVisitorName() {
    const savedName = localStorage.getItem("visitorName");

    if (savedName) {
        personalMessage.textContent = `Welcome back, ${savedName}!`;
        nameInput.value = savedName;
    }
}

saveNameBtn.addEventListener("click", () => {
    const userName = nameInput.value.trim();

    if (userName === "") {
        personalMessage.textContent = "Please enter your name first.";
        return;
    }

    localStorage.setItem("visitorName", userName);
    personalMessage.textContent = `Welcome back, ${userName}!`;
});

/* ===== Project Filter and Sort ===== */
function applyActiveFilterButton() {
    filterButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.filter === currentFilter);
    });
}

function sortProjects(cards, sortValue) {
    const sortedCards = [...cards];

    if (sortValue === "newest") {
        sortedCards.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
    } else if (sortValue === "oldest") {
        sortedCards.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
    } else if (sortValue === "title") {
        sortedCards.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
    }

    return sortedCards;
}

function renderProjects() {
    const filteredCards = projectCards.filter((card) => {
        return currentFilter === "all" || card.dataset.category === currentFilter;
    });

    const sortedCards = sortProjects(filteredCards, currentSort);

    projectsContainer.innerHTML = "";

    sortedCards.forEach((card) => {
        projectsContainer.appendChild(card);
    });

    emptyMessage.textContent = sortedCards.length === 0
        ? "No projects found for the selected filter."
        : "";

    attachDetailEvents();
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;
        localStorage.setItem("projectFilter", currentFilter);

        applyActiveFilterButton();
        renderProjects();
    });
});

sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    localStorage.setItem("projectSort", currentSort);
    renderProjects();
});

/* ===== Project Details Toggle ===== */
function attachDetailEvents() {
    const buttons = document.querySelectorAll(".details-btn");

    buttons.forEach((button) => {
        button.onclick = () => {
            const details = button.nextElementSibling;
            details.classList.toggle("hidden");

            button.textContent = details.classList.contains("hidden")
                ? "View Details"
                : "Hide Details";
        };
    });
}

/* ===== Contact Form Validation ===== */
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = contactName.value.trim();
    const emailValue = contactEmail.value.trim();
    const messageValue = contactMessage.value.trim();

    if (nameValue === "") {
        formMessage.textContent = "Please enter your name.";
        formMessage.className = "form-message error";
        return;
    }

    if (!isValidEmail(emailValue)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "form-message error";
        return;
    }

    if (messageValue === "") {
        formMessage.textContent = "Please enter your message.";
        formMessage.className = "form-message error";
        return;
    }

    if (messageValue.length < 10) {
        formMessage.textContent = "Your message should be at least 10 characters long.";
        formMessage.className = "form-message error";
        return;
    }

    formMessage.textContent = "Your message has been submitted successfully!";
    formMessage.className = "form-message success";
    contactForm.reset();
});

/* ===== GitHub API Integration ===== */
function createRepoCard(repo) {
    const repoCard = document.createElement("article");
    repoCard.className = "github-card";

    repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <p><strong>Language:</strong> ${repo.language}</p>
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer">View Repository</a>
    `;

    githubContainer.appendChild(repoCard);
}

async function fetchGitHubRepos() {
    const username = "FORKAN7";
    const hiddenRepos = ["3-1-css-basics-zainab14-48"];

    try {
        apiStatus.textContent = "Loading GitHub repositories...";
        githubContainer.innerHTML = "";

        createRepoCard({
            name: "TripMate",
            description: "A travel planning web application that helps users organize trips, explore destinations, and manage travel plans efficiently.",
            language: "JavaScript",
            url: "https://github.com/Naba-Alali/TripMate"
        });

        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);

        if (!response.ok) {
            throw new Error("Failed to fetch repositories.");
        }

        const repos = await response.json();

        repos
            .filter((repo) => !hiddenRepos.includes(repo.name))
            .slice(0, 5)
            .forEach((repo) => {
                createRepoCard({
                    name: repo.name,
                    description: repo.description || "No description available.",
                    language: repo.language || "Not specified",
                    url: repo.html_url
                });
            });

        apiStatus.textContent = "";
    } catch (error) {
    console.log("GitHub API failed, showing fallback only");

    apiStatus.textContent = "";

    githubContainer.innerHTML = "";

    const tripMateCard = document.createElement("article");
    tripMateCard.className = "github-card";

    tripMateCard.innerHTML = `
        <h3>TripMate</h3>
        <p>
            A travel planning web application that helps users organize trips,
            explore destinations, and manage travel plans efficiently.
        </p>
        <p><strong>Language:</strong> JavaScript</p>
        <a href="https://github.com/Naba-Alali/TripMate" target="_blank">
            View Repository
        </a>
    `;

    githubContainer.appendChild(tripMateCard);
}
}

/* ===== Initial Load ===== */
function initializePage() {
    setGreeting();
    loadTheme();
    loadVisitorName();

    applyActiveFilterButton();
    sortSelect.value = currentSort;
    renderProjects();

    fetchGitHubRepos();
}

initializePage();
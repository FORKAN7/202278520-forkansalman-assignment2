const toggleButton = document.getElementById("dark-toggle");
const greetingElement = document.getElementById("greeting");
const personalMessage = document.getElementById("personal-message");
const nameInput = document.getElementById("name-input");
const saveNameBtn = document.getElementById("save-name-btn");

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.getElementById("empty-message");

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const formMessage = document.getElementById("form-message");

/* ===== Greeting by Time ===== */
const currentHour = new Date().getHours();
let greeting = "";

if (currentHour < 12) {
    greeting = "Good Morning ☀";
} else if (currentHour < 18) {
    greeting = "Good Afternoon 🌤";
} else {
    greeting = "Good Evening 🌙";
}

greetingElement.textContent = greeting;

/* ===== Dark Mode with localStorage ===== */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* ===== Save Visitor Name ===== */
const savedName = localStorage.getItem("visitorName");

if (savedName) {
    personalMessage.textContent = `Welcome back, ${savedName}!`;
    nameInput.value = savedName;
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

/* ===== Filter Projects ===== */
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        projectCards.forEach(card => {
            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            emptyMessage.textContent = "No projects found in this category.";
        } else {
            emptyMessage.textContent = "";
        }
    });
});

/* ===== Contact Form Validation ===== */
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = contactName.value.trim();
    const emailValue = contactEmail.value.trim();
    const messageValue = contactMessage.value.trim();

    if (nameValue === "") {
        formMessage.textContent = "Please enter your name.";
        formMessage.className = "form-message error";
        return;
    }

    if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "form-message error";
        return;
    }

    if (messageValue === "") {
        formMessage.textContent = "Please enter your message.";
        formMessage.className = "form-message error";
        return;
    }

    formMessage.textContent = "Your message has been submitted successfully!";
    formMessage.className = "form-message success";

    contactForm.reset();
});
# Technical Documentation

## Project Overview

This project is a complete and polished personal web application developed for Assignment 4 in SWE363.

It builds on Assignments 1, 2, and 3:
- Assignment 1 focused on structure and layout  
- Assignment 2 introduced interactivity and user features  
- Assignment 3 added API integration and advanced logic  
- Assignment 4 refines the project into a professional, production-ready portfolio  

The goal of this assignment is to integrate all learned concepts into a single responsive and well-structured application.

---

## Project Structure

assignment-4/
- index.html
- css/styles.css
- js/script.js
- assets/images/
- docs/

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub API
- localStorage

---

## Implemented Features

### 1. Dynamic Content

#### Greeting Message
Displays a greeting based on the time of day using JavaScript logic.

#### Project Filtering
Users can filter projects by category using buttons.  
If no projects match, an empty state message is displayed.

#### Project Sorting
Users can sort projects by:
- newest
- oldest
- title

This improves user control and organization of displayed data.

---

### 2. Data Handling (State Management)

#### Dark Mode
Dark mode is saved using localStorage so it persists after page reload.

#### Visitor Name
User name is saved and displayed to personalize the experience.

#### Saved Filter and Sort
Selected filter and sorting options are stored and restored after refresh, ensuring a consistent user experience.

---

### 3. Form Validation

The contact form validates user input using multiple conditions:
- Empty name
- Invalid email format
- Empty message
- Minimum message length

The system provides:
- Clear error messages
- Success confirmation after submission

---

### 4. API Integration

The application connects to the GitHub API to fetch repository data dynamically.

Displayed information:
- Repository name
- Description
- Programming language
- Direct link

Additional enhancement:
- Selected repositories are prioritized (e.g., TripMate)
- Unwanted repositories are filtered out

If the API fails, a fallback error message is shown.

---

### 5. Complex Logic

The application demonstrates advanced logic through:

- Combining filtering and sorting before rendering results  
- Conditional validation in form submission  
- Dynamic UI updates based on user actions  
- Toggling project details interactively  

---

### 6. UI/UX Enhancements (Assignment 4)

- Improved layout consistency and spacing  
- Enhanced project cards (images, tags, details)  
- Clear navigation flow  
- Skills section to highlight competencies  
- Cleaner and more professional design  

---

### 7. Animation and Transitions

- Hover effects on cards and buttons  
- Smooth transitions for UI elements  
- Fade-in animation for sections  

---

## JavaScript Responsibilities

The JavaScript file handles:

- Theme switching and persistence  
- Greeting generation  
- Saving user data (name, preferences)  
- Filtering and sorting project lists  
- Managing UI interactions (details toggle)  
- Form validation and feedback  
- API data fetching and rendering  
- Error handling  

---

## Error Handling and User Feedback

The application includes:

- Validation error messages for form inputs  
- Success messages for completed actions  
- Empty state message for filtering  
- API error handling message  

This ensures the application does not break and always provides user feedback.

---

## User Experience

Users can interact with the website as follows:

1. Enter and save their name  
2. Toggle between light and dark mode  
3. Navigate through sections easily  
4. Filter and sort projects  
5. View detailed project information  
6. Explore GitHub repositories  
7. Submit the contact form  

This structured interaction improves usability and clarity.

---

## Responsiveness

The website is fully responsive using media queries and flexible layouts:

- Desktop view  
- Tablet view  
- Mobile view  

The layout adapts to maintain readability and usability across devices.

---

## Performance Improvements

- Removed unused CSS and duplicate styles  
- Optimized image usage (lazy loading)  
- Organized JavaScript into reusable functions  
- Reduced unnecessary DOM operations  

---

## Conclusion

This project represents the final stage of development in SWE363.

It combines structure, interactivity, logic, API integration, and user experience into a single professional application. The final result demonstrates technical growth, problem-solving ability, and readiness to build real-world web applications.
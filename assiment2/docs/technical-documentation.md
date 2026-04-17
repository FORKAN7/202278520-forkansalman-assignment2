# Technical Documentation

## Project Overview

This project is an advanced interactive personal portfolio website developed for Assignment 3 in SWE363.

It builds on Assignment 2 by adding more advanced functionality such as API integration, improved logic, better state management, and enhanced user experience.

---

## Project Structure

assignment-3/
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
Displays a greeting based on the time of day.

#### Project Filtering
Users can filter projects by category using buttons.  
If no projects match, a message is displayed.

#### Project Sorting (New)
Users can sort projects by:
- newest
- oldest
- title

---

### 2. Data Handling (State Management)

#### Dark Mode
Dark mode is saved using localStorage so it persists after reload.

#### Visitor Name
User name is saved in localStorage and displayed as a welcome message.

#### Saved Filter and Sort (New)
Selected filter and sort options are saved so they remain after page refresh.

---

### 3. Form Validation

The contact form checks:
- Empty name
- Invalid email
- Empty message
- Minimum message length

Displays:
- Error messages for invalid input
- Success message after submission

---

### 4. API Integration (New)

The website connects to the GitHub API to fetch and display repositories.

It shows:
- repository name
- description
- programming language
- link to repository

If the API fails, a user-friendly message is displayed.

---

### 5. Complex Logic

- Combine filtering and sorting together before displaying projects  
- Validate form using multiple conditions  
- Show or hide project details when clicking a button  

---

### 6. Animation and Transitions

- Hover effects on buttons and cards  
- Smooth transitions  
- Fade-in animation for sections  

---

## JavaScript Responsibilities

The script handles:
- Theme toggle and storage  
- Greeting generation  
- Saving user name  
- Filtering and sorting projects  
- Showing project details  
- Form validation and feedback  
- Fetching data from GitHub API  
- Handling API errors  

---

## Error Handling and User Feedback

- Validation error messages  
- Success message on form submission  
- Empty state message for filtering  
- API error message if data fails to load  

---

## User Experience

The website allows users to:
1. Enter and save their name  
2. Switch between light and dark mode  
3. Filter and sort projects  
4. View project details  
5. Explore GitHub repositories  
6. Submit the contact form  

---

## Responsiveness

The website uses media queries to adapt layout for:
- Mobile devices  
- Tablets  
- Smaller screens  

---

## Conclusion

This project improves on Assignment 3 by adding advanced features such as API integration, stronger logic, and better state management.

It demonstrates the ability to build a more dynamic and interactive web application with improved user experience.
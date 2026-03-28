# Technical Documentation

## Project Overview

This project is an interactive personal portfolio website developed for Assignment 2 in SWE363.

It builds on Assignment 1 by adding dynamic behavior, data handling, and improved user interaction.

---

## Project Structure

assignment-2/
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

---

## Implemented Features

### 1. Dynamic Content

#### Greeting Message
Displays a greeting based on the time of day.

#### Project Filtering
Users can filter projects by category using buttons.  
If no projects match, a message is displayed.

---

### 2. Data Handling

#### Dark Mode
Dark mode is saved using localStorage so it persists after reload.

#### Visitor Name
User name is saved in localStorage and displayed as a welcome message.

---

### 3. Form Validation

The contact form checks:
- Empty name
- Invalid email
- Empty message

Displays:
- Error messages for invalid input
- Success message after submission

---

### 4. Animation and Transitions

- Hover effects on buttons and cards
- Smooth transitions
- Fade-in animation for sections

---

## JavaScript Responsibilities

The script handles:
- Theme toggle and storage
- Greeting generation
- Saving user name
- Filtering projects
- Form validation and feedback

---

## Error Handling and User Feedback

- Validation error messages
- Success message on form submission
- Empty state message for filtering

---

## Responsiveness

The website uses media queries to adapt layout for:
- Mobile devices
- Tablets
- Smaller screens

---

## Conclusion

This project demonstrates improvements over Assignment 1 by adding interactivity, dynamic content, and better user experience.
# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. It includes structured sections for About Me, Projects, and Contact.

The website is designed with a modern purple-themed UI and supports responsiveness across desktop, tablet, and mobile devices.

## Project Structure

assignment-1/
- index.html
- css/styles.css
- js/script.js
- assets/images/
- docs/

The code is separated into logical files for better maintainability and clarity.

## HTML Structure

The main sections of the website include:

- Header (Name and Title)
- Navigation bar
- About section (with profile image)
- Projects section (project cards)
- Contact section (interactive form)

Each section uses semantic HTML elements and meaningful class names.

## CSS Design and Styling

The styling is organized using CSS variables for consistent color management. A purple gradient theme was applied to match a modern UI style.

Flexbox was used to align layout elements, especially in:
- The About section
- The Projects container

Media queries were implemented to ensure responsiveness on screens smaller than 768px.

## JavaScript Features

Two interactive features were implemented:

1. Dark Mode Toggle  
   Allows users to switch between light and dark themes dynamically using a button.

2. Greeting Message  
   Displays a dynamic greeting message based on the current time of day using JavaScript Date functions.

Additionally, the contact form uses an event listener to prevent page reload and display a confirmation message upon submission.

## Responsiveness

The layout adjusts automatically for smaller screens using media queries. On mobile devices:
- Navigation elements stack vertically.
- The About section changes to column layout.
- Project cards stack vertically.

This ensures compatibility and usability across different devices.

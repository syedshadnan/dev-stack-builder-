# Dev Stack

A modern React + TypeScript app for exploring developer tools, frameworks, and technologies to build an ideal development stack.

## About the Project
Dev Stack helps developers compare popular tools and technologies across frontend, backend, database, styling, and DevOps categories. Users can browse the available technologies, add their favorites to a custom stack, and remove items anytime.

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify

## Features
1. Explore a curated list of technologies from different categories.
2. Add technologies to a personal stack and prevent duplicates.
3. Remove technology items individually or clear the whole stack with notifications.

## Project Preview
This project includes:
- a responsive hero banner
- a technology cards section
- a stack sidebar
- a responsive footer
- loading state while local JSON data is being fetched

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that lets us write HTML-like code inside React components. It makes UI easier to read and helps us build components in a more natural way.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data stored inside a component and can change over time. Props are read-only, while state is managed inside the component.

### 3. What does the useState hook do, and where did you use it in this project?
The useState hook lets a component store and update values over time. In this project, I used it to store the technology list and the selected stack items in the app.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook runs after the component renders. I used it to fetch the local JSON file and update the state when the data is loaded.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key prop to identify each item and track which element changed, added, or removed. Without unique keys, React may render updates incorrectly or make the UI less efficient.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. In this project, I used it to show a loading message while the JSON data is being fetched and to show the empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. For example, the technology list is passed to the card component as props. A child sends data back to the parent by calling a function passed from the parent as a prop, like the add/remove action handlers.

## Live Project
Live Demo: [dev-stack-builder-react.netlify.app](https://dev-stack-builder-react.netlify.app/)

This project is built with React and styled using Tailwind CSS to create a clean developer-focused interface.

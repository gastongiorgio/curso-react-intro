# 📝 Todo Machine

> A React learning project focused on mastering component-based architecture, state management, custom hooks, and modern frontend development practices.

![Status](https://img.shields.io/badge/Status-In_Progress-yellow)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-181717?logo=github)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-BEM-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Live Demo

**[Experience the application live here!](https://gastongiorgio.github.io/curso-react)**

## 📖 About the Project

Todo Machine is a personal learning project developed while studying the React ecosystem.

Rather than building a production-ready task manager from day one, the goal of this repository is to **document my learning journey** by progressively implementing React concepts, improving the application's architecture, and adopting frontend best practices.

The project is structured in **Phases**, where each phase represents a new course and a deeper level of React architectural understanding.

## 📸 Preview

<p align="center">
  <img src="./assets/preview.png" alt="Todo Machine Main List" width="232" height="250"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./assets/preview2.png" alt="Todo Machine Creation Form" width="250" height="250"/>
</p>

## ✨ Current Features

- ✅ Create and manage TODO items
- ✅ Mark tasks as completed
- ✅ Delete existing tasks
- ✅ Search tasks in real time
- ✅ Dynamic task statistics
- ✅ Persistent data using Local Storage
- ✅ Responsive and component-based user interface
- ✅ SVG icon components with reusable architecture
- ✅ Smart empty states for initial load and failed searches
- ✅ Automated CI/CD deployment flow via GitHub Pages

## ⚛️ React Concepts Practiced

Throughout this project I have been implementing and reinforcing the following React concepts:

### Fundamentals

- Functional Components
- JSX
- Component Composition
- Props
- Event Handling

### State Management & APIs

- useState, useEffect, React Context
- Custom Hooks
- Local Storage & Data Persistence

### Advanced Architecture (In Progress)

- Render Props & Render Functions
- High-Order Components (HOC)
- React.Children & React.CloneElement
- Cross-tab State Synchronization (StorageListener)

## 🏗️ Project Structure

```text
src/
│
├── App/
│   ├── index.js
│   ├── useLocalStorage.js
│   └── useTodos.js
│
├── ChangeAlert/
│   ├── index.js
│   ├── useStorageListener.js
│   └── ChangeAlert.css
│
├── CreateTodoButton/
│   ├── index.js
│   └── CreateTodoButton.css
│
├── EmptyTodos/
│   ├── index.js
│   └── EmptyTodos.css
│
├── Modal/
│   ├── index.js
│   └── Modal.css
│
├── TodoCounter/
│   ├── index.js
│   └── TodoCounter.css
│
├── TodoForm/
│   ├── index.js
│   └── TodoForm.css
│
├── TodoHeader/
│   └── index.js
│
├── TodoIcon/
│   ├── index.js
│   ├── CompleteIcon.js
│   ├── DeleteIcon.js
│   ├── check.svg
│   ├── delete.svg
│   └── TodoIcon.css
│
├── TodoItem/
│   ├── index.js
│   └── TodoItem.css
│
├── TodoList/
│   ├── index.js
│   └── TodoList.css
│
├── TodoSearch/
│   ├── index.js
│   └── TodoSearch.css
│
├── TodosError/
│   ├── index.js
│   └── TodosError.css
│
├── TodosLoading/
│   ├── index.js
│   └── TodosLoading.css
│
├── index.css
└── index.js
```

The project now follows a composition-based architecture powered by custom hooks, replacing the previous React Context implementation. 

This branch introduces render functions and render props in `TodoList`, flexible component composition through `children`, prop injection with `React.Children` and `React.cloneElement`, and a Higher-Order Component that detects Local Storage changes across browser tabs and displays a synchronization alert. These patterns reduce component coupling, improve reusability, and demonstrate several approaches to sharing state and behavior in React.

## 🛠️ Technologies
- React 18

- JavaScript (ES6+)

- CSS3 (BEM Methodology)

- Create React App

- Local Storage API

- GitHub Pages (gh-pages)

## 💡 What I Learned
This project helped me understand how to build user interfaces by thinking in reusable components instead of pages.

While developing Todo Machine, I practiced React fundamentals such as state management, component composition, custom hooks, conditional rendering, and data persistence, reinforcing the importance of writing clean, maintainable, and scalable code. Currently, I am refactoring the application to apply advanced render patterns for better scalability.

## 🗺️ Learning Roadmap

### Phase 1: React Fundamentals (✅ Completed)

*View the V1 source code here: [v1.0-fundamentos Tag](https://github.com/gastongiorgio/curso-react/tree/v1.0-fundamentos)*

✅ Component-based architecture

✅ Props and state management

✅ Event handling

✅ Conditional rendering

✅ Lists and dynamic rendering

✅ Custom Hooks

✅ Local Storage persistence

✅ useEffect and Component Lifecycle

✅ React Context API

✅ React Portals

✅ Forms and Controlled Components

✅ Deployment & Hosting (GitHub Pages)

## Phase 2: Advanced Patterns & Composition (✅ Completed)

*View the V2 source code here: [v2.0-patrones-avanzados Tag](https://github.com/gastongiorgio/curso-react/tree/v2.0-patrones-avanzados)*

✅ React Design Principles and Healthy Component Composition

✅ State Colocation and Application Architecture

✅ Component Composition with children

✅ Render Functions and Render Props

✅ Replacing React Context with Custom Hooks

✅ React.Children API

✅ Prop Injection with React.cloneElement

✅ Higher-Order Components (HOCs)

✅ Refactoring a HOC into a Custom Hook

✅ Cross-tab State Synchronization with the Storage Event

✅ Managing Browser Event Listeners with useEffect

✅ Effect Cleanup with removeEventListener

✅ Loading States During Data Synchronization

✅ Pattern Comparison: Render Props, HOCs and Custom Hooks

## 🚀 Getting Started
Clone the repository:

```Bash
git clone https://github.com/gastongiorgio/curso-react.git
```

Navigate to the project:

```Bash
cd curso-react
```

Install dependencies:
```Bash
npm install
```

Start the development server:

```Bash
npm start
```

Deploy to GitHub Pages:
```
npm run deploy
```

Open your browser at: http://localhost:3000

## 👨‍💻 About This Repository
This repository is part of my journey learning React.

Instead of treating it as a one-time course project, I use it as a place to progressively apply new concepts while improving the codebase, architecture, and development practices.

The objective is to document my learning process through consistent commits and incremental improvements, following the same mindset used in real-world software development.
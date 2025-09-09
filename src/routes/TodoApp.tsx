// Build a Responsive To-Do List Application in React.js

// Objective:
// Create a simple, fully functional To-Do List application using React.js.
// The app should allow users to add, edit, and delete tasks.
// Additionally, the application must be responsive across different devices (desktop, tablet, and mobile)
// using CSS media queries.

// Key Requirements:
// Core Features
// Add new tasks with text input.
// Edit existing tasks.
// Delete tasks from the list.
// Mark tasks as completed (optional, if needed).
// UI/UX
// Clean and minimal design.
// Use of React components for modularity (e.g., TaskList, TaskItem, TaskForm).
// Responsive layout using CSS media queries to adapt for mobile, tablet, and desktop.

import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoBottomBar from "../components/TodoBottomBar";
import "../css/TodoApp.css";

const TodoApp = () => {
  const [curretTodoList, setCurrentTodoList] = useState([
    { id: 1, title: "Task 1", isCompleted: false },
    { id: 2, title: "Task 2", isCompleted: false },
  ]);

  const handleAddTask = (newTodo: {
    id: number;
    title: string;
    isCompleted: boolean;
  }) => {
    setCurrentTodoList((prev) => [...prev, newTodo]);
  };

  return (
    <div className="main-container">
      <div className="todo-app-container">
        <h1>TodoApp</h1>
        <TodoList todoList={curretTodoList} setTodoList={setCurrentTodoList} />
      </div>
      <div className="todo-bottom-bar-container">
        <TodoBottomBar todos={curretTodoList} addTask={handleAddTask} />
      </div>
    </div>
  );
};

export default TodoApp;

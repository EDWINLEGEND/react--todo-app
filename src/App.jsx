// Project: Simple React To-Do App with Add, Delete, Edit, and Reorder
// Minimal CSS included for clarity

// File: src/App.js
import React, { useState } from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css';

const App = () => {
  // State: list of task objects { id, text, completed }
  const [tasks, setTasks] = useState([]);

  // Add a new task to the top of the list
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  // Delete a task by filtering it out
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Edit a task's text
  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  // Move a task up or down in the list
  const moveTask = (id, direction) => {
    const index = tasks.findIndex(task => task.id === id);
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= tasks.length) return;
    const updated = [...tasks];
    // swap positions
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setTasks(updated);
  };

  return (
    <div className="app">
      <h1>My Cool To-Do List</h1>
      {/* Input form to add tasks */}
      <TodoInput addTask={addTask} />
      {/* List of tasks with controls */}
      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onMove={moveTask}
      />
    </div>
  );
};

export default App;
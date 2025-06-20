// File: src/components/TodoInput.js
import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [input, setInput] = useState(''); // holds current text input

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();              // prevent page reload
    const text = input.trim();       // remove extra spaces
    if (!text) return;               // do nothing if empty
    addTask(text);                   // add task via prop
    setInput('');                    // clear input box
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        placeholder="Enter a new task"
        value={input}                 // controlled component value
        onChange={e => setInput(e.target.value)} // update state on typing
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
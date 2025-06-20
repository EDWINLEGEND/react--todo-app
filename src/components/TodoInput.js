import React, { useState } from "react";

const TodoInput = ({ addTask }) => {
    const[input,setInput] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        const text=input.trim();
        if (!text) return;
        addTask(text);
        setInput('');
    }

    return (
    <>
        <form onSubmit={handleSubmit} className="todo-input">
            <input
             type="text"
             placeholder="Enter a new task"
             vaule={input}
             onChange={e=> setInput(e.target.value)}
            />
        
            <button type="submit">Add</button>
        </form>
    </>;
    );
};

export default TodoInput;

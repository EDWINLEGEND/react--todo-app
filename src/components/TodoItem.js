import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
 return (
    <li className={`todo-item ${task.completed}?"Completed":""`}>
        <span onClick ={()=> onToggle(task.id)}>
            {task.text}
        </span>
        <button onClick ={()=> onDelete(task.id)}>
            Delete
        </button>
    </li>

 );   
};

export default TodoItem
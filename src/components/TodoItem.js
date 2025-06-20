import React, { useState } from "react";

const TodoItem = ({ task, onDelete, onEdit, onMove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed){
      onEdit(task.id,trimmed);
      setIsEditing(false);
    }
  };


  return 
  <>
  <li className="todo-item">
    <div className='move-buttons'>
      <button onClick ={()=> onMove(task.id,'up')} disabled={false}>up</button>
      <button onClick ={()=> onMove(task.id,'down')} disabled={false}>down</button>
    </div>
    {isEditing ?(
      <>
        <input
        type="text"
        value={editText}
        onChange={e=>setEditText(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={()=>setIsEditing(false)}>Cancel</button>

      </>):(
        <>
        <span>
          {task.edit}
        </span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      
    )}


  </li>
  </>;
};

export default TodoList;

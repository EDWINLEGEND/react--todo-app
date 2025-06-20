// File: src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ task, onDelete, onEdit, onMove }) => {
  const [isEditing, setIsEditing] = useState(false); // toggle edit mode
  const [editText, setEditText] = useState(task.text);

  // Save edited text
  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed) {
      onEdit(task.id, trimmed);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {/* Move up/down buttons */}
      <div className="move-buttons">
        <button onClick={() => onMove(task.id, 'up')} disabled={false}>↑</button>
        <button onClick={() => onMove(task.id, 'down')} disabled={false}>↓</button>
      </div>

      {/* Display vs Edit mode */}
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
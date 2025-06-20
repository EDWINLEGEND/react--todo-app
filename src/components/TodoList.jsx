// File: src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ tasks, onDelete, onEdit, onMove }) => (
  <ul className="todo-list">
    {tasks.map((task, index) => (
      <TodoItem
        key={task.id}
        task={task}
        onDelete={onDelete}
        onEdit={onEdit}
        onMove={onMove}
      />
    ))}
  </ul>
);

export default TodoList;

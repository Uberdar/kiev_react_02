import React from 'react';

const TodoList = ({ todos, onDeleteTodos, onToggleCompleted }) => (
  <ul>
    {todos.map(el => (
      <li key={el.id}>
        <p>{el.text}</p>
        <input
          type="checkbox"
          checked={el.completed}
          onChange={() => onToggleCompleted(el.id)}
        />
        <button
          onClick={() => {
            onDeleteTodos(el.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;

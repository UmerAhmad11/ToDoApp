import React, { useEffect, useState } from 'react'
import './App.css'

function TodoList({ selectedDate, todos, setTodos }) {
    const [input, setInput] = useState('');
  
    const addTodo = () => {
      if (input.trim() !== '') {
        setTodos([...todos, { text: input, completed: false }]);
        setInput('');
      }
    };
  
    const updateTodo = (i, changes) => {
      const updated = [...todos];
      updated[i] = { ...updated[i], ...changes };
      setTodos(updated);
    };
  
    const deleteTodo = (i) => {
      const updated = [...todos];
      updated.splice(i, 1);
      setTodos(updated);
    };
  
    return (
      <div className="todo-list">
        <div className="todo-controls">
          <input
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
          />
          <button className="add-btn" onClick={addTodo}>➕</button>
          <button className="clear-btn" onClick={() => setTodos([])}>🧹</button>
        </div>
        <ul>
          {todos.map((todo, i) => (
            <li key={i} className={`todo-card ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(i, { completed: !todo.completed })}
              />
              <input
                type="text"
                value={todo.text}
                onChange={(e) => updateTodo(i, { text: e.target.value })}
                className="todo-text"
              />
              <button className="delete-btn" onClick={() => deleteTodo(i)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default TodoList;
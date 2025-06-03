import React, { useEffect, useState } from 'react'
import './App.css'
import banner from './assets/banner.gif'
import ToDo from './assets/ToDo.svg'
import { Container } from 'postcss'

function Sidebar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sidebar">
      <div className="username">Umer Ahmad</div>
      <div className="clock">{time.toLocaleTimeString()}</div>

      <div className="calendar">
        📅 {time.toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className = "App-header">
      <img className = "logo"
            src={ToDo}
            alt="Header Logo"
          />
        <img className = "banner"
            src={banner}
            alt="Header Banner"
          />
      </header>

      <Sidebar />

      {/* Push content below fixed header */}
      <main className="ml-[180px] mt-[160px] px-8 text-center text-white">
        <h1 className="text-xl md:text-3xl text-pink-400 tracking-widest mb-6">
          Welcome to the <span className="text-cyan-400">ToDo App</span>
        </h1>

        <div className="container">
          <TodoList />
        </div>

      </main>
    </div>

  )
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  const clearAll = () => setTodos([]);

  const updateText = (index, newText) => {
    const updated = [...todos];
    updated[index].text = newText;
    setTodos(updated);
  };

  return (
    <div className="todo-list">
      <div className="todo-controls">
        <input
          className="todo-input"
          type="text"
          value={input}
          placeholder="Add a task..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button className="add-btn" onClick={addTodo}>➕</button>
        <button className="clear-btn" onClick={clearAll}>🧹</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={`todo-card ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <input
              className="todo-text"
              type="text"
              value={todo.text}
              onChange={(e) => updateText(index, e.target.value)}
            />
            <button className="delete-btn" onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

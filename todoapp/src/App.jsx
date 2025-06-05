import React, { useEffect, useState } from 'react'
import './App.css'
import banner from './assets/banner.gif'
import ToDo from './assets/ToDo.svg'
import Sidebar from './Sidebar'
import TodoList from './ToDoList'




function App() {
  const [count, setCount] = useState(0)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todosByDate, setTodosByDate] = useState(() => {
    const saved = localStorage.getItem('todosByDate');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('todosByDate', JSON.stringify(todosByDate));
  }, [todosByDate]);
  

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

      <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />


      {/* Push content below fixed header */}
      <main className="ml-[180px] mt-[160px] px-8 text-center text-white">
        <div className="container">
          <h1 className="text-xl md:text-3xl text-pink-400 tracking-widest mb-6">
            Welcome to the <span className="text-cyan-400">ToDo App</span>
          </h1>
          <TodoList
            selectedDate={selectedDate}
            todos={todosByDate[selectedDate.toDateString()] || []}
            setTodos={(newTodos) =>
              setTodosByDate({
                ...todosByDate,
                [selectedDate.toDateString()]: newTodos,
              })
            }
          />

        </div>

      </main>
    </div>

  )
}

export default App

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
      <main className="pt-[170px] px-8 text-center text-white">
        <h1 className="text-xl md:text-3xl text-pink-400 tracking-widest mb-6">
          Welcome to the <span className="text-cyan-400">ToDo App</span>
        </h1>

        <div className="container">
          
        </div>

      </main>
    </div>

  )
}

export default App

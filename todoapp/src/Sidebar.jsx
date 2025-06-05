import React, { useEffect, useState } from 'react'
import './App.css'
import AnalogClock from './AnalogClock';
import MiniCalendar from './MiniCalendar'

function Sidebar({ selectedDate, setSelectedDate }) {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="sidebar">
        <div className="username">Umer Ahmad</div>
        <div className="clock">
          <AnalogClock />
        </div>
        <div className="calendar">
          <MiniCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
      </div>
    );
  }

export default Sidebar;
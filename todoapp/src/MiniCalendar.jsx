import React, { useEffect, useState } from 'react'
import './App.css'

function MiniCalendar({ selectedDate, setSelectedDate }) {
    const today = new Date();
    const [displayMonth, setDisplayMonth] = useState(today.getMonth());
    const [displayYear, setDisplayYear] = useState(today.getFullYear());
  
    const firstDay = new Date(displayYear, displayMonth, 1).getDay();
    const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
  
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  
    const isToday = (day) => {
      return (
        day &&
        today.getDate() === day &&
        today.getMonth() === displayMonth &&
        today.getFullYear() === displayYear
      );
    };
  
    const isSelected = (day) =>
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === displayMonth &&
      selectedDate.getFullYear() === displayYear;
  
    const prevMonth = () => {
      if (displayMonth === 0) {
        setDisplayMonth(11);
        setDisplayYear(displayYear - 1);
      } else {
        setDisplayMonth(displayMonth - 1);
      }
    };
  
    const nextMonth = () => {
      if (displayMonth === 11) {
        setDisplayMonth(0);
        setDisplayYear(displayYear + 1);
      } else {
        setDisplayMonth(displayMonth + 1);
      }
    };
  
  
    return (
      <div className="mini-calendar">
        <div className="calendar-nav">
          <button className="nav-btn" onClick={prevMonth}>⟵</button>
          <div className="month-label">
            {new Date(displayYear, displayMonth).toLocaleString('default', {
              month: 'long',
            })}{' '}
            {displayYear}
          </div>
          <button className="nav-btn" onClick={nextMonth}>⟶</button>
        </div>
        <div className="calendar-grid">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <div key={d} className="day-label">{d}</div>
          ))}
          {weeks.flat().map((d, i) => (
            <div
              key={i}
              className={`day-cell 
                ${d ? '' : 'empty'} 
                ${isToday(d) ? 'today' : ''} 
                ${isSelected(d) ? 'selected' : ''}`}
                onClick={() => d && setSelectedDate(new Date(displayYear, displayMonth, d))}
  
            >
              {d || ''}
            </div>
          ))}
        </div>
      </div>
    );
  }

export default MiniCalendar;
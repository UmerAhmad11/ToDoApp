import React, { useEffect, useState } from 'react'
import './App.css'

function AnalogClock() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval);
    }, []);
  
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12;
  
    const secondAngle = (seconds / 60) * 360;
    const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
    const hourAngle = ((hours + minutes / 60) / 12) * 360;
  
    const getHandCoords = (angle, length) => {
      const rad = (angle - 90) * (Math.PI / 180);
      const x = 50 + length * Math.cos(rad);
      const y = 50 + length * Math.sin(rad);
      return { x, y };
    };
  
    const hour = getHandCoords(hourAngle, 20);
    const minute = getHandCoords(minuteAngle, 30);
    const second = getHandCoords(secondAngle, 35);
  
    return (
      <div className="analog-clock">
        <svg className="clock-face" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" className="clock-border" />
  
          {/* Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i + 1) * 30) * (Math.PI / 180);
            const x = 50 + 38 * Math.cos(angle - Math.PI / 2);
            const y = 50 + 38 * Math.sin(angle - Math.PI / 2);
            return (
              <text
                key={i}
                x={x}
                y={y + 2}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="6"
                fill="white"
              >
                {i + 1}
              </text>
            );
          })}
  
          {/* Hands */}
          <line x1="50" y1="50" x2={hour.x} y2={hour.y} className="hour-hand" />
          <line x1="50" y1="50" x2={minute.x} y2={minute.y} className="minute-hand" />
          <line x1="50" y1="50" x2={second.x} y2={second.y} className="second-hand" />
        </svg>
      </div>
    );
  }

export default AnalogClock
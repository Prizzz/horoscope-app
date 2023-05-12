import React from 'react';
import './style.css';

const Date = ({ setDay }) => {
  function handleClick(e, value) {
    const items = document.querySelectorAll('.date-item');
    [...items].map((item) => (item.className = 'date-item'));
    e.target.classList.add('active');
    setDay(value);
  }

  return (
    <div className="date-container">
      <p className="date-item" onClick={(e) => handleClick(e, 'yesterday')}>
        Вчера
      </p>
      <p className="date-item active" onClick={(e) => handleClick(e, 'today')}>
        Сегодня
      </p>
      <p className="date-item" onClick={(e) => handleClick(e, 'tomorrow')}>
        Завтра
      </p>
    </div>
  );
};

export default Date;

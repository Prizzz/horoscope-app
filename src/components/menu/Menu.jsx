import React from 'react';
import horoscopeIcon from '../../assets/icons/moon.svg';
import compatibilityIcon from '../../assets/icons/heart.svg';
import './style.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item active">
        <img src={horoscopeIcon} alt="menu-horoscope" />
        Гороскоп
      </div>
      <div className="menu-item">
        <img src={compatibilityIcon} alt="menu-horoscope" />
        Совместимость
      </div>
    </div>
  );
};

export default Menu;

import React from 'react';
import { NavLink } from 'react-router-dom';
import horoscopeIcon from '../../assets/icons/moon.svg';
import compatibilityIcon from '../../assets/icons/heart.svg';
import './style.css';

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/" activeClassName="active">
        <div className="menu-item">
          <img src={horoscopeIcon} alt="menu-horoscope" />
          Гороскоп
        </div>
      </NavLink>

      <NavLink to="/compatibility" activeClassName="active">
        <div className="menu-item">
          <img src={compatibilityIcon} alt="menu-horoscope" />
          Совместимость
        </div>
      </NavLink>
    </div>
  );
};

export default Menu;

import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

const Welcome = () => {
  return (
    <div className="container">
      <div className="welcome-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="welcome-title">Твой гороскоп</h1>
        <p className="welcome-description">
          В этом мини-приложении Вы можете узнать про свой знак зодиака, а также посмотреть
          совместимость с другим знаком зодиака
        </p>
      </div>
    </div>
  );
};

export default Welcome;

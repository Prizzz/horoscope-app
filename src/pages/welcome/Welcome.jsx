import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

const Welcome = (props) => {
  return (
    <div className="container" {...props}>
      <div className="welcome-container">
        <div className="sub-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="welcome-title">Твой гороскоп</h1>
          <p className="welcome-description">
            В этом мини-приложении Вы можете узнать про свой знак зодиака, а также посмотреть
            совместимость с другим знаком зодиака
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

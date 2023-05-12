import React, { useState } from 'react';
import Horoscope from '../horoscope/Horoscope';
import ZodiacOption from '../../components/zodiac-option/ZodiacOption';
import Menu from '../../components/menu/Menu';
import logo from '../../assets/logo.png';
import zodiacs from '../../data';
import './style.css';

const Main = () => {
  const [zodiacSign, setZodiacSign] = useState(null);

  return (
    <>
      {zodiacSign === null && (
        <div className="container">
          <img src={logo} alt="logo" className="main-logo" />
          <h1 className="main-title">Выберите свой знак зодиака</h1>
          <div className="zodiac-options">
            {zodiacs.map((zodiac, i) => (
              <ZodiacOption
                zodiac={zodiac}
                key={zodiac.id}
                click={() => {
                  setZodiacSign(i);
                }}
              />
            ))}
          </div>
        </div>
      )}
      {zodiacSign !== null && <Horoscope zodiac={zodiacSign} />}
      <Menu />
    </>
  );
};

export default Main;

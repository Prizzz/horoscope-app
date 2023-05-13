import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import Welcome from '../welcome/Welcome';
import Horoscope from '../horoscope/Horoscope';
import ZodiacOption from '../../components/zodiac-option/ZodiacOption';
import Menu from '../../components/menu/Menu';
import logo from '../../assets/logo.png';
import zodiacs from '../../data';
import './style.css';

const Main = () => {
  const [zodiacSign, setZodiacSign] = useState(null);
  const [greet, setGreet] = useState(true);

  useEffect(() => {
    if (greet) setTimeout(() => setGreet(false), 1000);
  }, []);

  function RenderMain() {
    if (zodiacSign === null && !greet) {
      return (
        <div>
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
          <Menu />
        </div>
      );
    }
  }

  const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      <Transition in={greet} timeout={200} mountOnEnter unmountOnExit>
        {(state) => (
          <Welcome
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>
      <RenderMain />
      {zodiacSign !== null && (
        <>
          <Horoscope zodiac={zodiacSign} />
          <Menu />
        </>
      )}
    </>
  );
};

export default Main;

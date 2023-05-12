import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import './style.css';
import logo from '../../assets/logo.png';
import sep from '../../assets/icons/sep.png';
import zodiacs from '../../data';
import { compatibilities } from '../../data';
import ZodiacSelect from '../../components/zodiac-select/ZodiacSelect';

const Compatibility = () => {
  const [signFirst, setSignFirst] = useState('');
  const [signSecond, setSignSecond] = useState('');
  const [predictionPercent, setPredictionPercent] = useState('');
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    if (signFirst && signSecond) {
      setPredictionPercent(compatibilities[signFirst][signSecond][0]);
      setPrediction(compatibilities[signFirst][signSecond][1]);
    }
  }, [signFirst, signSecond]);

  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" className="main-logo" />
        <h1 className="main-title">Совместимость</h1>
        <div className="select-container">
          <ZodiacSelect text="Знак зодиака женщины" changeSign={setSignFirst} sign={signFirst} />
          <img src={sep} className="select-separator" alt="icon" />
          <ZodiacSelect text="Знак зодиака мужчины" changeSign={setSignSecond} sign={signSecond} />
        </div>
        {signFirst && signSecond && (
          <>
            <p className="predictionPercent">Ваша совместимость - {predictionPercent}%</p>
            <p className="prediction">{prediction}</p>
          </>
        )}
      </div>
      <Menu />
    </>
  );
};

export default Compatibility;

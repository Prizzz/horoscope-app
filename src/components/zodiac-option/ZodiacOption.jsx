import React from 'react';
import './style.css';

const ZodiacOption = ({ zodiac, click }) => {
  return (
    <div className="zodiac" onClick={click}>
      <div className="zodiac-img">
        <img src={zodiac.stars} alt="img" className="zodiac-stars" />
      </div>
      <div className="zodiac-info">
        <img src={zodiac.icon} alt="img" className="zodiac-icon" />
        <p className="zodiac-title">{zodiac.title}</p>
        <p className="zodiac-date">{zodiac.date}</p>
      </div>
    </div>
  );
};

export default ZodiacOption;

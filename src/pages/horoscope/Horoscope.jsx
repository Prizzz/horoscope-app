import React, { useEffect, useState } from 'react';
import './style.css';
import zodiacs from '../../data';
import Menu from '../../components/menu/Menu';
import Date from '../../components/date/Date';

const Horoscope = ({ zodiac }) => {
  const [day, setDay] = useState('today');
  const [date, setDate] = useState('Загрузка данных');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      return fetch('https://horoscope-rhag.onrender.com/')
        .then((response) => response.text())
        .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then((data) => {
          setContent(data.querySelector(`${zodiacs[zodiac].id} ${day}`).innerHTML);
          setDate(data.querySelector('date').getAttribute(`${day}`));
        });
    };

    fetchData().catch(console.error);
  }, [day]);

  return (
    <>
      <div className="container">
        <div className="horoscrope-container">
          <img src={zodiacs[zodiac].image} alt="zodiac-img" className="horoscrope-img" />
          <div className="horoscrope-info">
            <img src={zodiacs[zodiac]?.icon} alt="zodiac-icon" />
            <p className="horoscrope-title">{zodiacs[zodiac].title}</p>
          </div>
          <Date setDay={setDay} />
          <div className="horoscrope-content">
            <span>{date}</span> - {content}
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Horoscope;

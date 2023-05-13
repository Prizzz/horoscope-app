import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Compatibility from './pages/compatibility/Compatibility';
import Horoscope from './pages/horoscope/Horoscope';
import './App.css';

function App() {
  const [greet, setGreet] = useState(true);
  const [zodiacSign, setZodiacSign] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <Main
                greet={greet}
                setGreet={setGreet}
                zodiacSign={zodiacSign}
                setZodiacSign={setZodiacSign}
              />
            }
          />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/zodiac" element={<Horoscope zodiac={zodiacSign} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

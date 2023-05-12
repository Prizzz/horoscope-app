import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css';
import zodiacs from '../../data';

const ZodiacSelect = ({ text, changeSign, sign }) => {
  const handleChange = (event) => {
    changeSign(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: '70%' }}>
      <InputLabel id="demo-simple-select-label" className="menuZodiac-label">
        {text}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sign}
        label="Sign"
        onChange={handleChange}
        className="menuZodiac-select"
        sx={{ fontSize: 28 }}
      >
        {zodiacs.map((item) => (
          <MenuItem value={item.id} className="menuZodiac-item" key={item.id}>
            <img src={item.icon} alt="sign" />
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ZodiacSelect;

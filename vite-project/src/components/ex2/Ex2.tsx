// BT2.js
import React, { useState } from 'react';
import ThemeContext from '../ex1/Ex1';
import Button from '../ex3/Ex3';

const BT2 = () => {
  const [theme, setTheme] = useState('blue');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'blue' ? 'red' : 'blue'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1> BT 1 - 2 -3 -4</h1>
        <Button/>
      </div>
    </ThemeContext.Provider>
  );
};

export default BT2;
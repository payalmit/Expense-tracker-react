import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

import React, { useContext } from 'react';
import Overview from './Components/Overview.tsx';
import { SwatchIcon } from '@heroicons/react/24/solid';
import ThemeContext from './Context/ThemeContext.jsx';


function AppContent() {
 const {theme, setTheme} = useContext(ThemeContext);

  const handleTheme = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
  };

  return (
    (
        <div>
          <h1>Expense Tracker</h1>
          <button style={{ display: 'inline-grid' }}>
            <SwatchIcon height="20px" onClick={handleTheme} />
          </button>
          <p>{theme}</p>
          <Overview />
        </div>
    )
  );
}

export default AppContent;

import React, { useContext } from 'react';
import './App.css';
import ThemeContextProvider from './Context/ThemeContextProvider.jsx';
import AppContent from './AppContent.jsx';

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;

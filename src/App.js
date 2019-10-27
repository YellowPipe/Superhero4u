import React from 'react';

import './App.css';

import Homepage from './pages/Homepage/Homepage.component';
import Header from './components/Header/Header.component';

function App() {
  return (
    <div className='app'>
      <Header />
      <Homepage />
    </div>
  );
};

export default App;

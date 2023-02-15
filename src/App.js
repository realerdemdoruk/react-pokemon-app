import React from 'react';
import './App.css';
import { GlobalProvider } from './Context/GlobalState';
import { Home } from './components/Home';

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    </div>
  );
}

export default App;

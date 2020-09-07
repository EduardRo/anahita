import React from 'react';

import './App.css';
import NavBarComponent from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBarComponent />
      </header>
    </div>
  );
}

export default App;

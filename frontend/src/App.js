import React, {useState} from 'react'; /**sempre chamar mesmo que não seja necessário */

import './App.css'; /**importa css simples */

import logo from './assets/logo.svg';

import Routes from './router'

function App() {




  return (
    <div className="container">
        <img src={logo} alt='AirCNC' />

        <div className="content">
          <Routes />
      
        </div>
    </div>
  );
}

export default App;

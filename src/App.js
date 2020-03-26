import React, { Component } from 'react';

import Routes from './routes';
   
import logo from './logo.svg';
import './styles.css';
import Main from './pages/main';

import Header from './components/Header';

const App = () => (
  <div className="App">    
    <Header/>
    <Routes/>
  </div>
);

export default App;

import React, { Component } from 'react';
import Header from './containers/Header';
import AppRouter from './config/Router';
import './App.css';

class App extends React.Component{
  render(){
     return(
      <div>
    <AppRouter />
    </div>
    )
    }  
}

export default App;

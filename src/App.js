import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import NewAdd from './components/NewAdd/NewAdd';

export default class App extends Component {
  constructor(){
    super();
  }
  
  render(){

    return (
      <div className="App">
        <Header />
        <div className="place-container">
        <p className="place"></p>
        </div>
        <NewAdd />
      </div>
    );
  }
}
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Display from './components/Display/Display';
import NewAdd from './components/NewAdd/NewAdd';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render(){

    return (
      <div className="App">
        <Header />
        <Display />
        <NewAdd />
      </div>
    );
  }
}
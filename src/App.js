import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Favorites from './Favorites/Favorites';
import Header from './Header/Header';
import BucketList from './List/BucketList';
import NewAdd from './NewAdd/NewAdd';

export default class App extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <NewAdd />
        <body className="Body">
        <Favorites />
        <BucketList />
        </body>
      </div>
    );
  }
}

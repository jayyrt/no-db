import './App.css';
import React, { Component } from 'react';
import Favorites from './components/Favorites/Favorites';
import Header from './components/Header/Header';
import BucketList from './components/List/BucketList';
import NewAdd from './components/NewAdd/NewAdd';

class App extends Component {
  constructor(){
    super();

    this.state = {
      places: [],
    }
  }


  render(){
    return (
      <div className="App">
        <Header />
        <body className="Body">
        <Favorites />
        <BucketList />
        </body>
        <NewAdd />
      </div>
    );
}
}

export default App;
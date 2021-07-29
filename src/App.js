import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
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

  componentDidMount(){
    axios.get('/api/places')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
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

export default App;
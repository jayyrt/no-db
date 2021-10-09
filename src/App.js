import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import NewAdd from './components/NewAdd/NewAdd';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      favoritePlaces: [],
      bucketList: [],
    }
    this.getFavorites = this.getFavorites.bind(this);
  }

  getFavorites(){
    axios.get('/api/places')
    .then( res => {
      this.setState({ favoritePlaces: res.data })
    })
    .catch((err) => console.log(err))
  }

  render(){
    const places = this.state.favoritePlaces.map((places) => {
      return (
        <div key={places.id}>
          <p>City: {places.city}</p>
          <p>State: {places.state}</p>
          <p>Year: {places.year}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <Header />
        <div className="place-container">
        <p className="place">{places}</p>
        </div>
        <NewAdd />
      </div>
    );
  }
}
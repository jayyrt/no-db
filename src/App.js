import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Titles from './components/Titles/Titles';
import PlaceList from './components/placeList/PlaceList';
import NewAdd from './components/NewAdd/NewAdd';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      places: [],
    }
  }

  componentDidMount(){
    axios.get('api/places')
    .then(({ data }) => this.setState({ places: data }))
    .catch((err) => console.log(err))
}
  
  render(){

    return (
      <div className="App">
          <Header />
        <div className="body">
        <div className="title">
        <Titles />
        </div>
        <div className="place-container">
          <PlaceList places={this.state.places} />
          </div>
          <div className="visited">
          </div>
        </div>
          <NewAdd />
      </div>
    );
  }
}
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
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
        <PlaceList places={this.state.places} />
        <NewAdd />
      </div>
    );
  }
}
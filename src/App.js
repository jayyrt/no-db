import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Favorites from './Favorites/Favorites';
import Header from './Header/Header';
import BucketList from './List/BucketList';
import NewAdd from './NewAdd/NewAdd';

class App extends Component {
  constructor(){
    super();

    this.state = {
      places: []
    }
  }

  componentDidMount(){
    axios.get('/api/places')
    .then(({ data }) => this.setState({ places: data }))
    .catch((err) => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <NewAdd />
        <body className="Body">
        <Favorites places={this.state.places} />
        <BucketList />
        </body>
      </div>
    );
  }
}

export default App;
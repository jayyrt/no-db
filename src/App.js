import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import NewAdd from './components/NewAdd/NewAdd';

class App extends Component {
  constructor(){
    super();

    this.state = {
      places: [],
    }
  }

  componentDidMount() {
     axios
     .get('/api/places')
     .then(({ data }) => this.setState({ places: data }))
     .catch((err) => console.log(err))
  }

  


  render(){
    return (
      <div className="App">
        <Header />
        <NewAdd />
      </div>
    );
}
}

export default App;
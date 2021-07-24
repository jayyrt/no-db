import axios from 'axios';
import React, { Component } from 'react';

import './Favorites.css'

export default class Favorites extends Component {
    constructor() {
        super();

        this.state = {
            placesVisited: []
        }

        this.getPlaces = this.getPlaces.bind(this);
    }

    getPlaces(){
    //   axios.get('')
    //  .then( res => {
    //   this.setState({ placesVisited: res.data }) 
    // })
    }

    render(){
        return (
            <div>
            <section className="Visits-title">
                <span>Favorite Places</span>
                <button className="Get-Places" onClick={this.getPlaces}>Show Favorites</button>
            </section>
            <section className="Faves-content"></section>
            </div>
            
        )
    }
}
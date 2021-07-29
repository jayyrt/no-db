import React, { Component } from 'react';

import './Favorites.css'

class Favorites extends Component {
    constructor() {
        super();

        this.state = {
            places: [],
        }

    }

    render(){
        return (
            <div>
            <section className="Visits-title">
                <span>Favorite Places</span>
                <button className="Get-Places" onClick={this.getPlaces}>Show Favorites</button>
            </section>
            </div>
        )
    }
}

export default Favorites;
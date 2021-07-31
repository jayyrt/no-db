import React, { Component } from 'react';
import axios from 'axios';

import './Favorites.css'

class Favorites extends Component {
    constructor() {
        super();

        this.state = {
            places: [],
        }
    }

    componentDidMount(){
        axios.get('/api/places')
        .then(({ data }) => this.setState({ places: data }))
        .catch((err) => console.log(err))
      }

      handleDelete(){
          axios.delete(`./api/places?deleteId=${id}`)
          .then(({ data }) => this.setState({ places: data }))
          .catch((err) => console.log(err))
      }

    render(){
        return (
            <div>
            <section className="Visits-title">
                <span>Favorite Places</span>
                <div className="fave-places">{this.state.places.map((place) => {
                    return (
                        <div>
                            {place.city}
                            <button onClick={() => this.setState({handleDelete} )} className="delete-button">Remove</button>
                            </div>
                    )
                })}</div>
            </section>
            </div>
        )
    }
}

export default Favorites;
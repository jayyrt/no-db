import React, { Component } from 'react';
import axios from 'axios';
import PlaceList from '../placeList/PlaceList';
import './Display.css';

class Display extends Component {
    constructor(props){
        super(props);

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
        <div className="place-container">
            <PlaceList places={this.state.places} />
        </div>
        )
    }
}

export default Display;
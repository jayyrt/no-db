import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render(){
        return (
            <section className="App-header">
                <img className="Header-logo" src="https://static3.depositphotos.com/1000955/129/i/600/depositphotos_1295818-stock-photo-earth.jpg"/>
                <h1>My Life Atlas</h1>
            </section>
        )
    }
}

import React, { Component } from 'react';
import './Titles';

export default class Titles extends Component {
    render(){
        return (
            <div className="page-titles">
                <h1 className="title">Traveled</h1>
                <h1 className="title">Bucketlist</h1>
            </div>
        )
    }
}
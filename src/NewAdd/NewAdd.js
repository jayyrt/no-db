import React, { Component } from 'react';

import './NewAdd.css'

export default class NewAdd extends Component {
    contructor(){

        this.state= {
            text: '',
        }
        
        this.addToList = this.addToList.bind(this);
    }

    addToList() {

    }
    
    render() {
        return (
            <div className="Adding-spot">
                <input className="Add-Country"
                       placeholder="What is the country?" />
                <input className="Add-State"
                       placeholder="What is the state?" />
                <input className="Add-City"
                       placeholder="What is the city?" />
                <input className="Picture"
                       placeholder="add image link here"
                       img src="" />  
                <button onClick={ this.addToList }>Add to BucketList</button>
            </div>
        )
    }
}
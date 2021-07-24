import React, { Component } from 'react';

import './NewAdd.css'

export default class NewAdd extends Component {
    contructor(){

        this.state= {
            text: '',
        }
        this.createPost = this.createPost.bind(this);
    }

    createPost() {
        const { text } = this.state;
        const { createPostFn } = this.props;

        createPostFn( text );
        this.setState({ text: '' });
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
                       placeholder="add image link here" />  
                <button onClick={ this.createPost }>Add to BucketList</button>
            </div>
        )
    }
}
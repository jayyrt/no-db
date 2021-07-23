import React, { Component } from 'react';

import './NewAdd.css'

export default class NewAdd extends Component {
    contructor(){

        this.state= {
            text: ''
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
                <input className="Add"
                       placeholder="Where would you like to go next?" />
                <button onClick={ this.createPost }>Add to BucketList</button>
            </div>
        )
    }
}
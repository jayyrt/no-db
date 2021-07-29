import React, { Component } from 'react';

import './BucketList.css';

export default class BucketList extends Component {
    constructor(){
        super();

        this.state = {
            bucketList: []
        }

        this.getBucketList = this.getBucketList.bind(this);
        this.deletePlace = this.deletePlace.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    getBucketList() {

    }

    deletePlace() {

    }

    addPhoto() {

    }

    moveToFavorites() {

    }

    render(){
        const Wish = this.state.bucketList.map((newPlace) => {
            return (
                <div key={newPlace.id}>
                    <p>Country: {newPlace.country}</p>
                    <p>State: {newPlace.state}</p>
                    <p>City: {newPlace.city}</p>
                    <p>{newPlace.photo}</p>
                    <button className="Remove-Place" onClick={this.deletePlace}>Delete</button>
                    <button className="Visited" onClick={this.moveToFavorites}>ACCOMPLISHED</button>
                </div>
            )
        })

        return (
            <div>
            <section className="Bucket-list">
                <span>Places to Visit</span>
                <button className="Get-Bucket-List" onClick={this.getBucketList}>Show BucketList</button>
            </section>
            <section className="Bucket-List-Content">
            </section>
            </div>

        );
    }
}
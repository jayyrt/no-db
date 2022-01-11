import axios from 'axios';

function deletePlace(id) {
    console.log('delete item')
    axios.delete(`/api/places/${id}`)
    .then(({ data }) => this.setState({ places: data })) 
    .catch((err) => console.log(err))     
}

const place = (props) => {
    return (
        <div className={`place-container-${props.placeIndex}`}>
            <div className='place-box'>
            <div className='place'>{props.place.location}</div>
                <img className='picture' src={props.place.url_pic} />
                <div className='button-box'>
                <button className='button'>Visited</button>
                <button onClick={deletePlace()} className='button'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default place;
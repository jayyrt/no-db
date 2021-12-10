import Place from './Place';

const PlaceList = (props) => {
    return (
        props.places.map((place, index) => {
            return (
                <Place place={place} placeIndex={index}/>
            )
        })
    )
}

export default PlaceList;
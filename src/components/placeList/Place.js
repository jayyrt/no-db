const place = (props) => {
    return (
        <div className={`place-container-${props.placeIndex}`}>
            <div className="place">{props.place.location}</div>
        </div>
    )
}

export default place;
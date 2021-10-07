const data = require('../places');
let places = [...data.places]

function addPlaces(req, res) {
    const { place } = req.body;
    places.push({ place });

    res.status(200).send(places);
}

function getPlaces(req, res) {
    res.status(200).send(places);
}

function updatePlaces() {
    let newPlaces = places.map(place => {
        if(req.params.id === place.id){
            return { name: req.params.name };
        }   else {
            return place;
        }
    })
    places = newPlaces;
   res.status(200).send(places);
}

function deletePlaces(req, res) {
    const { deleteId } = req.query;
    console.log({ deleteId })
    const deleteIndex = places.findIndex(place => place.id === deleteId)
    places.splice(deleteIndex, 1);

    res.status(200).send(places);
}

module.exports = {
    addPlaces,
    getPlaces,
    updatePlaces,
    deletePlaces

}


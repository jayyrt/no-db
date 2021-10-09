const data = require('../places');
const places = [...data.places];

    function getPlaces(req, res) {
        res.status(200).send(places);
    }

    function createPlace(req, res) {
        const { city, state, year, img } = req.body;
        places.push({ city, state, year, img });
        res.status(200).send(places);
    }

module.exports = {
    getPlaces,
    createPlace
}
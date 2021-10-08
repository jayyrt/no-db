const data = require('../places');
const places = [...data.places];

module.exports = {
    getPlaces: (req, res) => {
        res.status(200).send(places);
    },
}
const { v4: uuid } = require('uuid');

const places = [
    {
        "id": uuid(),
        "city": "Chicago",
        "state": "Illinois",
        "year": 2017,
        "visited": true,
        "img": "",
    }
]

module.exports = {
    places,
}
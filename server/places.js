const { v4: uuid } = require('uuid');

const cars = [
    {
        "country": "Mexico",
        "state": "Sinaloa",
        "city": "Culiacan",
        "img":  "https://vuelapalmundo.com/wp-content/uploads/2020/02/culiacan.jpg",
        "id": 1
    },
    {
        "country": "United States",
        "state": "Illinois",
        "city": "Chicago",
        "img": "",
        "id": 2
    },
    {
        "country": "United States",
        "state": "Wyoming",
        "city": "Jackson",
        "img": "",
        "id": 3
    },
    {
        "country": "Costa Rica",
        "state": "San Jose",
        "city": "San Jose",
        "img_url": "",
        "id": 4
    }
]

module.exports = {
    cars,
}
const { v4: uuid } = require('uuid');

const places = [
    {
        "country": "Mexico",
        "state": "Sinaloa",
        "city": "Culiacan",
        "img":  URL("https://vuelapalmundo.com/wp-content/uploads/2020/02/culiacan.jpg"),
        "id": uuid(),
    },
    {
        "country": "United States",
        "state": "Illinois",
        "city": "Chicago",
        "img": "",
        "id": uuid()
    },
    {
        "country": "United States",
        "state": "Wyoming",
        "city": "Jackson",
        "img": "",
        "id": uuid()
    },
    {
        "country": "Costa Rica",
        "state": "San Jose",
        "city": "San Jose",
        "img_url": "",
        "id": uuid()
    }
]

module.exports = {
    places,
}
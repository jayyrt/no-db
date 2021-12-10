const data = require('./placesData');
let places = [...data.places];

module.exports = {
    view: (req, res) => {
        res.status(200).send(places);
    },
    create: (req, res) => {
        const { location, status, url_pic } = req.body;
        let place = {
            id: id,
            location: location,
            status: status,
            url_pic: url_pic,
        }
        places.push(place);
        id++;
        res.status(200).send(places);
    },
    update: (req, res) => {
        let index = null;
          places.forEach((place, i) => {
              if (place.id === Number(req.params.id)) index = i;
          });
          places[index] = {
              id: places[index].id,
              state: req.body.state || places[index].state,
              country: req.body.country || places[index].country,
              year: req.body.year || places[index].year,
              img: req.body.img || places[index].img
          };
          res.status(200).send(places);
    },
    delete: (req, res) => {
        let index = null;
        places.forEach((place, i) => {
            if (place.id === Number(req.params.id)) index = i;
        });
        places.splice(index, 1);
        res.status(200).send(places);       
    },
}
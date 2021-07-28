const express = require("express");
const {addPlaces, getPlaces, updatePlaces, deletePlaces} = require('./controllers/placesControllers');

const app = express();
app.use(express.json());

app.get('/api/places', getPlaces)

app.post('/api/places', addPlaces)

app.put('/api/places/:id/name', updatePlaces)

app.delete('/api/places', deletePlaces)

app.listen(3000, () => console.log('listening on 3000'));
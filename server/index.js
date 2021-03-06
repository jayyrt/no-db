const express = require("express");
const pc = require("./controllers/placesControllers");

const app = express();
app.use(express.json());

app.get('/api/places', pc.view); 
app.post('/api/places', pc.create);
app.put('/api/places/:id', pc.update);
app.delete('/api/places/:id', pc.delete);

const PORT = 4000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
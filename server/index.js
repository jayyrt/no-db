const express = require("express");
const cors = require("cors");
const pc = require("./controllers/placesControllers.js");

app.use(cors());
const app = express();
app.use(express.json());

app.get('/api/places', pc.view); 
app.post('/api/places', pc.create);
app.put('/api/places/:id', pc.update);
app.delete('/api/places/:id', pc.delete);

const PORT = 3050;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
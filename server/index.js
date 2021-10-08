const express = require("express");
const pc = require("./controllers/placesControllers.js");

const app = express();
app.use(express.json());

app.get("/api/places", pc.getPlaces)

const PORT = 4000

app.listen(PORT, () => console.log(`listening on ${PORT}`));
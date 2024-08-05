const express = require("express");
require("dotenv").config(); 

const addMovies = require("./controllers/addMovies");


const mongoose = require("mongoose");

const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");


// Connection to mongodb
mongoose.connect(process.env.mongo_connection, {})
.then(()=>{
    console.log("Connexion verss mongodb reussie");
}).catch(()=>{
    console.log("erreur de connexion avec mongodb");
})

const app = express();

app.use(express.json())

//Models
require("./models/movies_model");




// Routes
app.post("/api/movies", addMovies);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id",getSingleMovie);
app.patch("/api/movies",editMovie);

app.listen(8000,() =>{
    console.log("Server started");
});

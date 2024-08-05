const mongoose = require("mongoose");

const moviesShema = new mongoose.Schema({
    movies_name : {
        type: String,
        // required: [true, "Le nom est requis"],
    },
    info : {
        type: String,
    },
    rating: {
        type: Number
    }
});

const moviesModal = mongoose.model("movies", moviesShema);

module.exports = moviesModal;
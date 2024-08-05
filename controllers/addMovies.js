const mongoose = require("mongoose");

const addMovies = async (req, res) =>{

    const moviesModel = mongoose.model("movies");

    console.log(req.body);

    const { movie_name, info, rating} = req.body;

    try {
        if(!movie_name) throw "Le nom est requis";
        if(!info) throw "Info est requis";
        if(!rating) throw "Rating est requis";
        if(rating<1 || rating>10) throw "La note doit etre compris entre 1 et 10";
    } catch (e) {
        res.status(400).json({
            status:"Erreur",
            message: e,
        })
        return;
    }

 

    //Sucess


    try{
        const createMovie = await moviesModel.create({
            movies_name: movie_name,
            info: info,
            rating: rating,
        });
        console.log(createMovie);
    }catch(e){
        res.status(400).json({
            status:"Erreur",
            message: e.message,
        })
        return;
    }

   
    

    res.status(200).json({
        status: "success",
        message: "Film ajouté avecc success"
       
    });

};


module.exports = addMovies;
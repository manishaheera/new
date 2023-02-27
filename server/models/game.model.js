const mongoose = require ("mongoose");

const GameSchema = new mongoose.Schema({

    // _ID FIELD IS AUTOMATICALLY CREATED

    name: {
        type: String,
        required: [true, "Name of game is required"],
        minlength: [3, "Game name must be at least 3 characters"]
    },

    yearReleased: {
        type: Number,
        required: [true, "Release date is required"],
        min: [1950, "Year must exceed 1950 digits to be valid"],
    },

    genre: {
        type: String,
        required: [true, "Game genre is required, please choose from list"],
        enum: [
            "Action",
            "Platformer",
            "RPG",
            "FPS",
            "RTS",
            "MMO",
            "Puzzle",
            "Sports",
            "Adventure",
            "Children's",
        ]
    },

    image: {
        type: String,
        required: [true, "Game image required"]
    },

    rating:{
        type: String,
        enum: [
            "E",
            "T",
            "MA",
            "AO",
            "E10",
            "Y",
            "No Rating"
        ]
    },

    company: {
        type: String,
    }

//TIMESTAMPS AUTOMATICALLY CREATE "createdAt" & "updatedAt" DATE AND TIME INFO FOR EACH DOCUMENT
}, {timestamps:true})

const Game = mongoose.model("Game", GameSchema)

module.exports = Game;


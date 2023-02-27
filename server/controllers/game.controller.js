const Game = require("../models/game.model");

module.exports = {
// EXPORTING OBJECT OF KEY/VALUE PAIRS. KEY = HOW WE ARE REFERRING OUR CALLS

    findAllGames: (req, res) => {
        Game.find()
            .then((allGames)=> {
                console.log(allGames);
            //CONVERT IN TO JSON SO CLIENT CAN READ
                res.json(allGames)
            })
            .catch((err)=> {
                console.log("Find all games failed");
                res.json({message: "Something went wrong in find all games", error: err})
            })
    },

    createNewGame: (req, res) => {
        Game.create(req.body)
        .then((newGame) => {
            console.log(newGame);
            res.json(newGame)
        })
        .catch((err)=> {
            console.log("Create new game failed");
            res.status(400).json(err)
        })
    },

    findOneGame: (req, res)=> {
        Game.findOne({_id: req.params.id})
            .then((oneGame)=> {
                console.log(oneGame);
                res.json(oneGame)
            })
            .catch((err)=> {
                console.log("Find one game failed")
                res.json({message: "Something went wrong in find one game!", error: err})
            })
    },

    deleteOneGame: (req, res)=> {
        Game.deleteOne({_id: req.params.id})
            .then((deletedGame)=> {
                console.log(deletedGame);
                res.json(deletedGame)
            })
            .catch((err)=> {
                console.log("Delete one game failed")
                res.json({message: "Something went wrong in delete one game!", error: err})
            })
    },

    updateOneGame: (req, res)=> {
        Game.findByIdAndUpdate({_id: req.params.id},

            req.body,
            {new: true, runValidators: true}
            )
            
            .then((updatedGame)=> {
                console.log(updatedGame);
                res.json(updatedGame)
            })
            .catch((err)=> {
                console.log("Update one game failed")
                res.json({message: "Something went wrong in updated one game!", error: err})
            })
    }




}
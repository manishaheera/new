const GameController = require("../controllers/game.controller");

module.exports = (app) => {
    //DIFFERENT REQUEST TYPES CAN HAVE SAME ROUTE
    app.get("/api/games", GameController.findAllGames),
    app.post("/api/games", GameController.createNewGame),
    app.get("/api/games/:id", GameController.findOneGame),
    app.delete("/api/games/:id", GameController.deleteOneGame),
    app.put("/api/games/:id", GameController.updateOneGame)
}
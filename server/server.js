const express = require("express");
const cors = require("cors");
const app = express();


//MIDDLE WARE FOR PUT AND POST CALLS, OTHERWISE WE WOULD GET TYPEERRORS
//THIS PARSES INCOMING REQUESTS W/ JSON PAYLOADS
// RECOGNIZES REQUEST OBJECT AS JSON OBJECT

app.use(express.json());
//PARSES INCOMING REQUESTS W/ JSON PAYLOADS AS STRINGS/ARRAYS.
//RECOGNIZES REQUESTS OBJECTS AS STRINGS OR ARRAYS
app.use(express.urlencoded({extended:true}));

//LETS FRONT END PORT 3000 MAKE CALLS TO OUR BACK END PORT 8000
// WITHOUT THIS, RESULTS WILL BE "CORS ERROR" WHEN MAKING AXIOS CALLS
app.use(cors({
    origin:"http://localhost:3000"
}))

// NEED TO REQUIRE CONFIG FILES ****************************
require("./config/mongoose.config")

// NEED TO REQUIRE ROUTES ***********************************
require("./routes/game.routes")(app)

app.listen(8000, ()=> console.log("You are connected to port 8000"))



//MONGOOSE IS AN ODM LIBRARY FOR NOSQL MONGODB DATABASE
const mongoose =  require ("mongoose");

// IF DATABASE NAME DOES NOT ALREADY EXIST, IT WILL BE CREATED. 
const dbName = "gamesDatabase";

mongoose.connect(`mongodb://localhost/${dbName}`, {
// OPTIONS WE PASS TO HANDLE DEPRECATION WARNINGS IN TERMINAL 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> {
        console.log(`You are connected to the database called ${dbName}`)
    })
    .catch ((err)=> {
        console.log(`you have a problem connecting to the database ${dbName}. Here is your error:`, err)
    })
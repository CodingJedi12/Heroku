require("dotenv").config();

//======================
//DECLARE DEPENDENCIES
//======================

const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

//======================
//PORT
//======================

//allows use of heroku's port or local port, depending on environment
const port = process.env.port || 3000;

//======================
//DATABASE
//======================

//connect to db either through heroku or local
const MONGODB_URL = process.env.MONGODB_URL;

//Connect to mongo
//fix depreciation warnings
mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//error / success 
db.on("error", (err) => console.log(err.message + "is mongod not running?"));
db.on("connected", () => console.log("mongod connected: ", MONGODB_URL));
db.on("disconnected", () => console.log("mongod disconnected"));

//======================
//MIDDLEWARE
//======================

//use public folder for static assets
app.use(express.static('public'));

//populates req.body w parsed info from forms - if no data from forms will return an empty object
app.use(express.urlencoded({extended: false})) // does not allow nested objects in query strings
app.use(express.json()); //returns middleware that only parses JSON

//use override
app.use(methodOverride('_method')); //allows for post, put and delete requests from a form

//======================
//ROUTES
//======================

//localhost:3000
app.get("/", (req, res) => {
    res.send("Hello World")
})

//I

//N

//D

//U

//C

//E

//S

//======================
//CANN YOUUU HEARRR MEEEE
//======================
app.listen(port, () => console.log(`yo we live over here at port ${port}`))
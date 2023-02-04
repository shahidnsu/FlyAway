const mongoose = require('mongoose');
const DB_NAME = "FlyAway";
const DB_PORT = 27017
//const uri = `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`
const uri = `mongodb+srv://akram123:test123@cluster0.obt6fow.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
module.exports = { mongoose, uri };
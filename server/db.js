const mongoose = require('mongoose');
const DB_NAME = "FlyAway";
const uri = `mongodb+srv://akram123:test123@cluster0.obt6fow.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
module.exports = { mongoose, uri };
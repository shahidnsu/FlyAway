const { mongoose } = require('../db');

const FlightDetailSchema = mongoose.Schema({
    iataCode: {
        type: String
    },
    at:{
        type: String
    }
})
module.exports = FlightDetailSchema ;
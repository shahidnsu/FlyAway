const { mongoose } = require('../db');
const FlightDetailSchema=require('./flightDetail');

const FlightSegmentsSchema = mongoose.Schema({
    departure:FlightDetailSchema,
    arrival: FlightDetailSchema
})
module.exports = FlightSegmentsSchema ;
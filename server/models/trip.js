
const { mongoose } = require('../db');
const FlightSegmentsSchema = require('./flightSegment');

const TripListSchema = mongoose.Schema({
    segments: [FlightSegmentsSchema],
    price: String,
})
//const TripList = mongoose.model('TripList', TripListSchema);
module.exports = TripListSchema;
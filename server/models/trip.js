
const { mongoose } = require('../db');
const FlightSegmentsSchema = require('./FlightSegment');

const TripListSchema = mongoose.Schema({
    segments: [FlightSegmentsSchema],
    price: String,
    user: String
})
//const TripList = mongoose.model('TripList', TripListSchema);
module.exports = TripListSchema;

const { mongoose } = require('../db');
const TripListSchema = require('./trip');

const TripSchema = mongoose.Schema({
    trip: [TripListSchema],
    })
const TripList = mongoose.model('TripList', TripSchema);
module.exports = TripList;
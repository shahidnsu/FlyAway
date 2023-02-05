
const { mongoose } = require('../db');
const TripListSchema = require('./trip');

const TripSchema = mongoose.Schema({
    trip: [TripListSchema],
    user:String
    })
const TripList = mongoose.model('TripList', TripSchema);
module.exports = TripList;
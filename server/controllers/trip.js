
const TripList = require('../models/tripList');

const createTrip = async (req, res) => {
    try {
        
        const result = await TripList.create(req.body);
        res.status(200).send(result);

    }
    catch (error) {
        res.status(400);
        res.json({ "error": "Failed to create trip" });
    }
}

const getTrip = async (req, res) => {
    try {
        const { email } = req.user;
        console.log('email', email);
        const result = await TripList.find({user:email});
        res.send(result);
        res.status(200);
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

module.exports = { createTrip, getTrip }
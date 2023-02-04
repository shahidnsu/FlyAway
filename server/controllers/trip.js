
const TripList = require('../models/tripList');

const createTrip = async (req, res) => {
    try {


        const response = req.body;
        const getData = await TripList.insertMany([response], (e) => {
            if (e) console.log(e)
            else console.log("success1")
        })
        res.status(201).send(getData)
        //res.status(200).send(getData)
        //console.log("object", response)
        //     const data = new TripList(response)
        //     await data.save((err, coll) => {
        //         if (err) return console.error(err);
        //         return res.status(200).send(coll)
        //     });
        //    // console.log(data)

        // res.status(200).send(data)//.json(result);
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
        const result = await TripList.find();
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
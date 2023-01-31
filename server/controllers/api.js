const Amadeus = require("amadeus");
const fs = require('fs')
const filePath = __dirname+'/trimmed_airports.json';
const db = {airports :[]}
fs.readFile(filePath, 'utf8', function(err,data)  {
    
    try{
        data = JSON.parse(data)
        
        db.airports= data
        
    }
    catch (e){
        console.log(e)
    }
})
//console.log(db)
const amadeus = new Amadeus({
    clientId: "Xk3oqx7VCr344IidedqmU3UK9Nr7yVRa",
    clientSecret: "zBh2azNRJADQVa3W",
});

const searchAirport = async (req, res) => {
    const city = req.params["city"];
    let desiredAirports = db.airports.filter((record)=>record.city.toLowerCase().includes(city.toLowerCase()));
    res.send(desiredAirports);
};

const flightSearch = async (req, res) => {
    const originCode = req.query.originCode;
    const destinationCode = req.query.destinationCode;
    const dateOfDeparture = req.query.dateOfDeparture;

    await amadeus.shopping.flightOffersSearch
        .get({
            originLocationCode: originCode,
            destinationLocationCode: destinationCode,
            departureDate: dateOfDeparture,
            adults: "1",
            max: "5",
        })
        .then(function(response) {
            res.send(response.result);
        })
        .catch(function(response) {
            res.send({
                error: "404",
                message: "no flights are found.please try another destination",
                success: false,
            });
        });
};

const flightConfirmation = async (req, res) => {
    const flight = req.body.flight;

    amadeus.shopping.flightOffers.pricing
        .post(
            JSON.stringify({
                data: {
                    type: "flight-offers-pricing",
                    flightOffers: [flight],
                },
            })
        )
        .then(function(response) {
            res.status(201);
            res.send(response.result);
        })
        .catch(function(response) {
            res.status(404);
            res.send({
                error: "404",
                message: response,
                success: false,
            });
        });
};

const flightBooking = async (req, res) => {
    const flight = req.body.flight;
    const name = req.body.name;
    await amadeus.booking.flightOrders
        .post(
            JSON.stringify({
                data: {
                    type: "flight-order",
                    flightOffers: [flight],
                    travelers: [
                        {
                            id: "1",
                            dateOfBirth: "1996-12-12",
                            name: {
                                firstName: name.firstName,
                                lastName: name.lastName,
                            },
                            gender: "MALE",
                            contact: {
                                emailAddress: "shahidkhannsucse74@gmail.com",
                                phones: [
                                    {
                                        deviceType: "MOBILE",
                                        countryCallingCode: "+88",
                                        number: "01797587727",
                                    },
                                ],
                            },
                            documents: [
                                {
                                    documentType: "PASSPORT",
                                    birthPlace: "Dhaka",
                                    issuanceLocation: "Dhaka",
                                    issuanceDate: "2015-04-14",
                                    number: "00000000",
                                    expiryDate: "2025-04-14",
                                    issuanceCountry: "ES",
                                    validityCountry: "ES",
                                    nationality: "ES",
                                    holder: true,
                                },
                            ],
                        },
                    ],
                },
            })
        )
        .then(function(response) {
            res.send(response.result);
        })
        .catch(function(response) {
            res.status(404);
            res.send({
                error: 404,
                message: response,
                success: false,
            });
        });
};
module.exports = {
    searchAirport,
    flightSearch,
    flightConfirmation,
    flightBooking,
};

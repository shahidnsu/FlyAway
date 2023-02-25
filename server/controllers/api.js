const Amadeus = require("amadeus");
const fs = require("fs");
const filePath = __dirname + "/trimmed_airports.json";
const db = { airports: [] };
fs.readFile(filePath, "utf8", function(err, data) {
    try {
        data = JSON.parse(data);

        db.airports = data;
    } catch (e) {
        console.log(e);
    }
});
//console.log(db)
const amadeus = new Amadeus({
    clientId: "Np6G7BkVSA7JaatxQlNvpicjxP3KAyDV",
    clientSecret: "vV0NCbQBjcsnAbVp",
});

const searchAirport = async (req, res) => {
    const city = req.params["city"];
    let desiredAirports = db.airports.filter((record) =>
        record.city.toLowerCase().includes(city.toLowerCase())
    );
    res.send(desiredAirports);
};

const searchAirPortRoutes = async (req, res) => {
    const iataCode = req.params["iataCode"];

    await amadeus.airport.directDestinations
        .get({
            departureAirportCode: iataCode,
        })
        .then(function(response) {
            let routes = [];
            routes = response.result.data.map((data) => {
                return {
                    name: "",
                    city: data.name,
                    iata: data.iataCode,
                };
            });
            res.send(routes);
        })
        .catch(function(response) {
            res.send({
                error: "404",
                message: "no flights are found.please try another destination",
                success: false,
            });
        });
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
            nonStop: false,
            adults: "1",
            max: "5",
        })
        .then(function(response) {
            //demo object for frontend
            let flights = response.result.data;
            flights = flights.map((flight) => {
                return {
                    segments: flight.itineraries[0].segments.map((segment) => {
                        return {
                            departure: {
                                iataCode: segment.departure.iataCode,
                                at: segment.departure.at,
                            },
                            arrival: {
                                iataCode: segment.arrival.iataCode,
                                at: segment.arrival.at,
                            },
                        };
                    }),

                    price: flight.price.total,
                };
            });

            res.send(flights);
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
    res.send("flight is confirmed");
};

const flightBooking = async (req, res) => {
    res.send("Flight is boooked");
};
module.exports = {
    searchAirport,
    flightSearch,
    flightConfirmation,
    flightBooking,
    searchAirPortRoutes,
};

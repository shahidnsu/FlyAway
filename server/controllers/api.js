const Amadeus = require("amadeus") 
const dotenv = require("dotenv");
const amadeus = new Amadeus({
    clientId : process.env.clientId || '',
    clientSecret: process.env.clientSecret || ''
})
const searchAirport = async (res,req) => {
    const parameter = req.params.parameter
    await amadeus.reference.locations.get({
        keyword: parameter,
        subType: Amadeus.location.airport
    })
    .then(function(response){
        res.send(response.result)
    })
    .catch(function(response){
        res.send(response)
    })
  
}

const flightSearch = async (res,req) => {
   const originCode = req.query.originCode;
   const destinationCode = req.query.destinationCode;
   const dateOfDeparture = req.query.dateOfDeparture;

   amadeus.shopping.flightOffersSearch.get({
    originLocationCode:originCode,
    destinationLocationCode: destinationCode,
    departureDate: dateOfDeparture,
    adults: "1",
    max : "5"
   })
   .then(function(response){
    res.send(response.result)
   })
   .catch(function(response){
    res.send(response)
   })
}
module.exports={searchAirport, flightSearch}
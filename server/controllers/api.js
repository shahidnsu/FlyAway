const Amadeus = require("amadeus") 
//const dotenv = require("dotenv");
const amadeus = new Amadeus({
    clientId : "Xk3oqx7VCr344IidedqmU3UK9Nr7yVRa",
    clientSecret: "zBh2azNRJADQVa3W",
})
const searchAirport = async (req,res) => {
    
    const parameter = req.params['search']
    
    await amadeus.referenceData.locations.get({
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

const flightSearch = async (reg,res) => {
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
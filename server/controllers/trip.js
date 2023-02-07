const transport =require('./nodeMailer')
const TripList = require('../models/tripList');


//creating email options for the 

const creatingMailOptions = function() {
   let userEmail = localStorage.getItem("user")
    
    let mailOptions = {
      from: "hello.hr.portal@gmail.com",
      to: `${userEmail}`,
      subject: "Your trip is  booked",
      text: `
      <div style="background: transparent linear-gradient(90deg, #2BAD90 0%, #00489A 100%) 0% 0% no-repeat padding-box;
      background: transparent linear-gradient(90deg, #2BAD90 0%, #00489A 100%) 0% 0% no-repeat padding-box;
      width: 497px; height: 133px; color: white; padding: 1px 0 10px 0;">
  <h1 style="text-align: center; font-weight: 100; font-size: 20px ; line-height: 57px;  font-family: Verdana; margin: 0px;">Thank you  for Booking trip with flyAway</h1>
  <h3 style="text-align: center; font-weight: 100; font-size: 50px ; line-height: 57px;  font-family: Verdana;  margin: 0px;">Enjoy your trip and give us your feedback how you can improve our self</h3>
</div>
<br>
<br>
</div>
`,
    };
    return mailOptions;
}

const createTrip = async (req, res) => {
    try {
        
        const result = await TripList.create(req.body).then(result => {
            return creatingMailOptions()
        }).then(mailOptions => {
            transport(mailOptions)
        })
        
        
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
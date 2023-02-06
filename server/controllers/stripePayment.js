
const stripe = require("stripe")(
    "sk_test_51MWLP4CtRfbKEF0FJBCOmK8RyJzT7h8aTvZDxYtNz8cogNUyjdQIoKim8VHUQP26EMQaLJVBceMWCnscb1w3LOGi00yTssb5Z4"
  );

const successPayment =  async (req, res) => {
   
    // console.log(req);
    const price = req.body.price;
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Ticket price",
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:4200/success",
      cancel_url: "http://localhost:4200",
    })
    res.json({id:session.id})
    
}
module.exports ={successPayment}
    


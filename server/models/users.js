const { mongoose } = require('../db');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //type of  angular date is  object so to avoid complexity we are using string 
    dob:{
        type: Date,
        required:true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    passport:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;
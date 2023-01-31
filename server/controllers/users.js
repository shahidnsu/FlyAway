const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res
            .status(409)
            .send({ error: '409', message: 'User already exists', success: false });
    }
    try {
        let { firstName, lastName, email, password, phoneNumber, dob, country, passport } = req.body;

        password = await bcrypt.hash(password, 10);

        if (firstName && lastName && email && password && phoneNumber && dob && country && passport) {
            await User.create({ firstName, lastName, email, password, phoneNumber, dob, country, passport });

            res.status(200);
            res.json({ "message": "Sign up successful" });
        }
        else {
            res.status(400);
            res.json({ "error": "Provide all the required information" })
        }
    }
    catch (error) {
        // console.log(error);
        res.send({ error: '409', message: 'Authentication Error', success: false });
        res.status(409)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        // console.log(user);
        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password);
            // const result = await Application.find({ user: user.email });

            if (isValidPassword) {

                // Generate JWT token
                const token = jwt.sign(
                    { _id: user._id },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '7d'
                    });

                res.status(200);
                res.setHeader("Authorization", 'Bearer ' + token);
                res.json({
                    "success": true,
                    "access_token": 'Bearer ' + token,
                    "expiresIn": "7d",
                    "email": user.email,
                    // "data" : result,
                    "message": "Login Successful",
                })
            }
            else {
                res.status(401).json({ "message": "Password did not match", "suceess": false });
            }
        }
        else {
            res.status(401).json({ "message": "User Not Found", "suceess": false });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ "message": "Authentication failed", "suceess": false })
        res.send(401);
    }
}

const profile = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).send(user);
    } catch {
        res.status(404).send({ error, message: 'Resource not found' });
    }
};

const profileUpdate = async (req, res) => {
    try {
        const user = req.user;
        const { _id } = user;
        const { firstName, lastName, email, passport, dob, country,  phoneNumber } = req.body;
        const result = await User.findByIdAndUpdate(_id, {$set: {firstName, lastName,email, passport, dob, country,  phoneNumber}}, {new: true});
        res.status(200).send(result);
    } catch {
        res.status(404).send({ error, message: 'User not found' });
    }
};















module.exports = { createUser, login, profile, profileUpdate }
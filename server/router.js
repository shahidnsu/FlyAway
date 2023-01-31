const router = require('express').Router();
const userController = require('./controllers/users');
const apiController = require('./controllers/api')
const { authMiddleware } = require('./middlewares.js/auth');

router.post('/signin', userController.login);

router.post('/signup', userController.createUser);

router.get('/profile', authMiddleware, userController.profile);
router.get('/airports/:city', apiController.searchAirport );
router.get('/flight-search', apiController.flightSearch)
router.post('/flight-confirmation', apiController.flightConfirmation),
router.post('/flight-booking',apiController.flightBooking)


module.exports = router;
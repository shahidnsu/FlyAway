const router = require('express').Router();
const userController = require('./controllers/users');
const apiController = require('./controllers/api');
const tripListController = require('./controllers/trip');

const { authMiddleware } = require('./middlewares/auth');

router.post('/signin', userController.login);

router.post('/signup', userController.createUser);

router.get('/profile', authMiddleware, userController.profile);
router.put('/profile', authMiddleware, userController.profileUpdate);

router.get('/airports/:city', apiController.searchAirport);
router.get('/flight-search', apiController.flightSearch)
router.post('/flight-confirmation', apiController.flightConfirmation),
    router.post('/flight-booking', apiController.flightBooking)
router.get("/search-airports-routes/:iataCode", apiController.searchAirPortRoutes)

router.get('/tripList', authMiddleware, tripListController.getTrip);
router.post('/tripList', authMiddleware, tripListController.createTrip);

module.exports = router;
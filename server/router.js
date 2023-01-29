const router = require('express').Router();
const userController = require('./controllers.js/users');
const { authMiddleware } = require('./middlewares.js/auth');

router.post('/signin', userController.login);

router.post('/signup', userController.createUser);

router.get('/profile', authMiddleware, userController.profile);

module.exports = router;
const {Router} = require('express');
const userController = require('./controller/userController');
const jwtController = require('./helpers/jwtController');

const router = Router();

router.get(
    '/users',
    userController.getUsers
);

router.get(
    '/user',
    jwtController.verifyToken,
    userController.getUser
);

router.get(
    '/login',
    userController.login
);

router.post(
    '/user',
    userController.createUser
);

module.exports = router;
const {Router} = require('express');
const userController = require('./controller/userController');
const jwtController = require('./helpers/jwtController');
const checkEmptyBody = require('./helpers/checkEmptyBody');

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
    checkEmptyBody,
    userController.login
);

router.post(
    '/user',
    checkEmptyBody,
    userController.createUser
);

module.exports = router;
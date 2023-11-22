const {Router} = require('express');
const userController = require('./controller/userController');

const router = Router();

router.get(
    '/user',
    userController.getUsers
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
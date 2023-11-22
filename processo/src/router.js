const {Router} = require('express');
const userController = require('./controller/userController');

const router = Router();

router.get(
    '/user',
    userController.getUsers
);

router.post(
    '/user',
    userController.createUser
);

module.exports = router;
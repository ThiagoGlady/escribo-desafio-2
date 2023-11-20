const {Router} = require("express");

const router = Router();

router.get('/user', (req, res) => {
    return res.status(200).send("Teste");
});

module.exports = router;
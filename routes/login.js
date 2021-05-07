const router = require("express").Router();
const { loginUser } = require("../controllers/authController");

router.post("/", loginUser, (req, res) => {
    res.send("you are logged in");
});

module.exports = router;

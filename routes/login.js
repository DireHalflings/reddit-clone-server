const router = require("express").Router();
const { loginUser, issueToken } = require("../controllers/authController");

router.post("/", loginUser, issueToken);

module.exports = router;

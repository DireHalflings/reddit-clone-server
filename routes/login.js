const router = require("express").Router();
const {
    loginUser,
    issueToken,
    validateUser,
} = require("../controllers/authController");
const { createUser } = require("../controllers/userController");

router.post("/", loginUser, issueToken);
router.post("/register", validateUser, createUser, issueToken);

module.exports = router;

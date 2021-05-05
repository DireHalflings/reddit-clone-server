const bcrypt = require("bcrypt");

const validateUser = (req, res, next) =>{
        //unique email check
        const uniqueUserCheck
        await User.find({ email: req.body.email }).then((users) => {
            uniqueUserCheck = users;
        });
        if (uniqueUserCheck.length > 0)
            return res.status(403).send({
                Error: `User with email ${req.body.email} already exists`,
            });
}

const encryptUserPassword = (req, res, next) =>{
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    const passHash = await bcrypt.hash(req.body.password, salt);
    req.body.password = passHash;
}

module.exports = {validateUser, encryptUserPassword}
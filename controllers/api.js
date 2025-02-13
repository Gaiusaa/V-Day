const jwt = require("jsonwebtoken");
require("dotenv").config();

const passwordReturn = (req, res) => {
    const token = jwt.sign({}, process.env.JWT_SECRET, {expiresIn: "1h"});

    res.cookie("authToken", token, {
        httpOnly: true,
        secure: false, // Set to true when using HTTPS
        sameSite: "Strict",
        maxAge: 3600000,
    })

    console.log(res)
    res.json({success: true});
};

const loginReturn = (req, res) => {
    res.json({success: false});
};

module.exports = {
    passwordReturn,
    loginReturn,
};
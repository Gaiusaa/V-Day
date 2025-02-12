require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res) => {
    const token = req.cookies.authToken;

    const valid = jwt.verify(token, process.env.JWT_SECRET);
    return valid;
}

const verifyPassword = (req, res) => {
    const {password} = req.body;
    if(!password || password.toUpperCase() !== process.env.PASSWORD) return false;
    return true;
}

module.exports = {
    verifyPassword,
    verifyToken,
};
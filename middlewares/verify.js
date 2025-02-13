require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res) => {
    const token = req.cookies.authToken;

    if (!token) {
        return false;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
            return false;
        }
        return true;
    });
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
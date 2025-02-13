const verifyMiddleware = require("./verify");
const indexController = require("../controllers/index");
const apiController = require("../controllers/api");

const passwordSubmit = (req, res) => {
    const validToken = verifyMiddleware.verifyToken(req, res);
    if (validToken || validToken === true) return indexController.serveError(req, res);
    console.log("no token, can log in")
    const validPassword = verifyMiddleware.verifyPassword(req, res);
    if (!validPassword || validPassword === false) return apiController.loginReturn(req, res);
    console.log("valid password")
    apiController.passwordReturn(req, res);
};

module.exports = {
    passwordSubmit,
};
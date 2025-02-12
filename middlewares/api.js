const verifyMiddleware = require("./verify");
const indexController = require("../controllers/index");

const passwordSubmit = (req, res) => {
    const validToken = verifyMiddleware.verifyToken(req, res);
    if (!validToken || validToken === false) return indexController.serveError(req, res);

    const validPassword = verifyMiddleware.verifyPassword(req, res);
    if (!validPassword || validPassword === false) return indexController.serveError(req, res);

    
};

module.exports = {
    passwordSubmit,
};
const verifyMiddleware = require("./verify");
const indexController = require("../controllers/index");

const questionRequest = (req, res) => {
    const validToken = verifyMiddleware.verifyToken(req, res);
    if (validToken === false) res.redirect("/");

    indexController.serveQuestion(req, res);
};

module.exports = {
    questionRequest,
}
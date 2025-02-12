const serveIndex = (req, res) => {
    res.render("index");
};

const serveQuestion = (req, res) => {
    res.render("question");
};

const serveError = (req, res) => {
    res.render("error");
};

module.exports = {
    serveIndex,
    serveQuestion,
    serveError,
};
const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");
const apiMiddleware = require("../middlewares/api")

router.post("/password-submit", apiMiddleware.passwordSubmit);

module.exports = router;
const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");
const indexMiddleware = require("../middlewares/index")

router.get("/", indexController.serveIndex);
router.get("/question", indexMiddleware.questionRequest);

module.exports = router;
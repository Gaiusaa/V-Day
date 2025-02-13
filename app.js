// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

// Variable
const port = 3000;
const app = express();

// Config
app.use(express.static("public"));
app.use('/images', express.static("images"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for URL-encoded data
app.use(cookieParser());

// Routes
app.use("/", require("./routes/index"));
app.use("/api", require("./routes/api"));

// Function
const onConnect = () => {
    console.log(`App is running on port ${port}`);
};

// Event
app.listen(port, onConnect);
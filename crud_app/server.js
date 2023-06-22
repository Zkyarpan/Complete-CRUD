const express = require("express");
const app = express();
const APP_port = require("./config");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const connectDB = require("./server/database/connection");

// Morgan module allows is to log a request on the console.
app.use(morgan("tiny"));

// mongoDB connection
connectDB();

// Parser request to body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load routers
app.use("/", require("./server/routes/router"));

app.listen(APP_port, () => {
  console.log(`Server is running on http://localhost:${APP_port}.`);
});

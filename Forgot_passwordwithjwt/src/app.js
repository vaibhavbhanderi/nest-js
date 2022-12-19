const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
const hbs = require("hbs");
const mongoose = require("mongoose");
const URI = process.env.URL;
const Strouter = require("../Router/router");
const path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const viewpath = path.join(__dirname, "../templetes/views");
app.set("view engine", "hbs");
app.set("views", viewpath);
mongoose.set('strictQuery', true);
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
app.use("/", Strouter);

app.listen(PORT, () => {
  console.log("Port Are listing in" + PORT);
});

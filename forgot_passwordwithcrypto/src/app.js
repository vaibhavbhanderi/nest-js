const express = require("express");
require("dotenv").config();
const app = express();
const connection = require("./db");

connection();

app.use(express.json());
const passwordReset = require("../routers/passwordReset");
const users = require("../routers/users");



app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);


const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

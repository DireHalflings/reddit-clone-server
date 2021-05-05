const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const db = require("./config/database");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(port, () => console.log(`server is running on port: ${port}`));

module.exports = app;

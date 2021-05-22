const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const loginRoutes = require("./routes/login");
const path = require("path");

const { verifyToken } = require("./controllers/authController");

const app = express();

const port = process.env.PORT || 5000;

const corsOptions = { accessControlAllowOrigin: "*" };
app.use(cors(corsOptions));
const db = require("./config/database");
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());

app.use("/users", verifyToken, userRoutes);
app.use("/posts", verifyToken, postRoutes);
app.use("/login", loginRoutes);
app.use("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

app.listen(port, () => console.log(`server is running on port: ${port}`));

module.exports = app;

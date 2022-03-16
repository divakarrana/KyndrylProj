const express = require("express");
const app = express();
const userRoute = require("./routes/userRoutes");

app.use(express.json({ limit: '10kb' }));

//ROUTES
app.use("/api/user", userRoute);
module.exports = app;
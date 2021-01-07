const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const Review = require("./models/ReviewsSchema")
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

require('dotenv').config();
app.use(cors())
app.options('*', cors()) // include before other routes

//Nodemon file
mongoose
    .connect(process.env.DB_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );

    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", require("./routes/user-endpoints"))
app.use("/", require("./routes/review-endpoints"))


app.listen(process.env.PORT || 3000, () => {
    console.log("running")
})
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

app.post("/writeReview", (req, res) => {
    console.log("AUTHORIZATION HEADER", req.headers.authorization)

    let token = req.headers.authorization
    var decoded = jwt.verify(token, 'shhhh');

    console.log("DECODED", decoded)
    Review.create(req.body)
        .then((insertedReview) => {
            res.send("review inserted")
        })
        .catch((err) => {
            res.status(500).send("Oops!")
        })
});

app.listen(process.env.PORT || 3000, () => {
    console.log("running")
})
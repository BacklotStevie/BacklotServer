const express = require('express');
const Review = require('../models/ReviewsSchema');
const app = express();
var jwt = require("jsonwebtoken");

app.get("/reviews", (req, res) => {

    Review.find()
        .then((reviews) => {
            res.json(reviews)
        })
        .catch((err) => {
            res.status(500), json({ message: "Oops" })
        })
});

app.get("/reviews/:id", (req, res) => {
    Review.findById(req.params.id)
        .then((review) => {
            res.json(review);
        })
        .catch((err) => {
            res.status(500).json({ message: "Oops" });
        });
});

app.put("/reviews/:id", (req, res) => {
    console.log(req.body)
    Review.findByIdAndUpdate(req.params.id, req.body)
        .then((oldReview) => {
            res.send("okay")
        })
        .catch((err) => {
            res.status(500).send("Oops");
        });
});

app.delete("/reviews/:id", (req, res) => {
    Review.findByIdAndDelete(req.params.id, req.body)
        .then((deleteReview) => {
            res.send("Deleted")
        })
        .catch((err) => {
            res.status(500).send("Oops");
        });
});

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

module.exports = app
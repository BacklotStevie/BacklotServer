const express = require("express")
const app = express();
const User = require("../models/UsersSchema");
var jwt = require("jsonwebtoken");


app.get("/users", (req, res) => {

    User.find()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(500), json({ message: "Oops" })
        })
});

app.post("/signup", (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) return res.status(400).send("Existing email");
            else {
                return User.create({
                    email: req.body.email,
                    password: req.body.password
                }).then((user) => {
                    var token = jwt.sign({ id: user._id }, 'shhhh')
                    res.status(200).json({ 
                        token, 
                        user: {
                            email: user.email,
                            userType: user.userType
                        } 
                    })
                })
            }
        })   
        .catch((err) => {
            res.status(500).send("error")
        })
        
})

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) res.status(403).send("Invalid credentials");
            else if (user.password === req.body.password) {
                var token = jwt.sign({ id: user._id }, 'shhhh')
                res.status(200).json({ 
                    token, 
                    user: {
                        email: user.email,
                        userType: user.userType
                    } 
                })
                
            }
            else {
                res.status(403).send("Invalid credentials");
            }
        })
})

module.exports = app;
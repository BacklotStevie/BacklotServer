const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: String,
    password: String,
    userType: {
        type: String,
        enum: ["normal", "admin"],
        default: "normal"
    }
})

module.exports = mongoose.model("Users", usersSchema, "users");
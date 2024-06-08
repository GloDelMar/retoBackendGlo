const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100
    },
    profilePic: {
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password:{
        type: String,
        required: true,
        minLength:8
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("user", schema)
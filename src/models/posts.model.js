const mongoose = require("mongoose")

const modelName = "posts"

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 40
    },
    imagen: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 400
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    createdat: {
        type: Date,
        default: Date.now
    },
    updatedat: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model(modelName, schema)
const createError = require("http-errors")
const Users = require("../models/users.model")
const Encrypt = require("../lib/encrypt")


async function create(User){
    const userFound = await Users.findOne({email: User.email})

    if(userFound){
        throw createError(409, "Email already in use")
    }
    
    const encryptedPassword = await Encrypt.encrypt(User.password)
    const newUser = await Users.create({ ...User, password: encryptedPassword })
    
    return newUser
}

async function getById(id){
    const user = await Users.findById(id)
    return user
}

module.exports = {
    create,
    getById
}
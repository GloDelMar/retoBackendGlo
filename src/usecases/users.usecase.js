const createError = require("http-errors")
const Users = require("../models/users.model")

async function create(User){
    const userFound = await Users.findOne({email: User.email})

    if(userFound){
        throw createError(409, "Email already in use")
    }
    
}


async function getById(id){
    const user = await Users.findById(id)
    return user
}

module.exports = {
    create,
    getById
}
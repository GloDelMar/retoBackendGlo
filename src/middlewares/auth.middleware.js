const createError = require("http-errors")
const jwt = require("../lib/jwt")

async function auth(requres, response, next){
    try{

    }catch(error){
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
}

module.exports = auth
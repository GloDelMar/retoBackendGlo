const createError = require("http-errors")
const usersUsecase = require ("../usecases/users.usecase")
const jwt = require("../lib/jwt")

async function auth(request, response, next){
    try{
        const token = request.headers.authorization

        if(!token){
            throw createError(401, "JWT id required")
        }

        const payload = jwt.verify(token)
        if (!payload || !payload.id) {
            throw createError(401, "Invalid JWT")
        }


        const user = await usersUsecase.getById(payload.id)
        
        if (!user) {
            throw createError(401, "User not found")
        }
        request.user = user

        next()

    }catch(error){
        response.status(error.status || 401)
        response.json({
            success: false,
            error: error.message
        })
    }
}

module.exports = auth
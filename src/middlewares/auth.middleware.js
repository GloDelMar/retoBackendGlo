const createError = require("http-errors");
const usersUsecase = require("../usecases/users.usecase");
const jwt = require("../lib/jwt");

async function auth(request, response, next) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw createError(401, "JWT required");
        }

        // Extraer el token del encabezado
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw createError(401, "Token required");
        }

        const payload = jwt.verify(token);
        if (!payload || !payload.id) {
            throw createError(401, "Invalid JWT");
        }

        const user = await usersUsecase.getById(payload.id);
        if (!user) {
            throw createError(401, "User not found");
        }

        request.user = user;
        next();

    } catch (error) {
        response.status(error.status || 401);
        response.json({
            success: false,
            error: error.message
        });
    }
}

module.exports = auth;

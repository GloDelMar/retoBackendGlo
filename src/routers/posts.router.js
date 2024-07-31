const express = require("express");
const postsUsecase = require("../usecases/posts.usecase");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

// Crear un nuevo post
router.post("/", auth, async (request, response) => {
    try {
        const post = {
            ...request.body,
            user: request.user._id // Asegúrate de pasar el ID del usuario
        };

        const createdPost = await postsUsecase.createPost(post);

        response.json({
            success: true,
            message: "Post created",
            data: { createdPost }
        });

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

// Obtener todos los posts con opción de búsqueda
router.get("/", async (request, response) => {
    try {
        const search = request.query.search;
        const posts = await postsUsecase.getAll(search);

        response.json({
            success: true,
            message: "All posts",
            data: { posts }
        });

    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message
        });
    }
});

// Actualizar un post por ID
router.patch("/:id", auth, async (request, response) => {
    try {
        const { id } = request.params;
        const post = request.body;
        const updatedPost = await postsUsecase.upDateById(id, post);

        response.json({
            success: true,
            message: "Post updated",
            data: { updatedPost }
        });

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

// Eliminar un post por ID
router.delete("/:id", auth, async (request, response) => {
    try {
        const { id } = request.params;
        const userId = request.user._id; // Corregido para usar el ID del usuario desde request.user
        const deletedPost = await postsUsecase.deleteById(userId, id);

        response.json({
            success: true,
            message: "Post deleted",
            data: { deletedPost }
        });

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;

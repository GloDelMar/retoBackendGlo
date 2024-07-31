const express = require("express")
const postsUsecase = require("../usecases/posts.usacase")
const auth = require("../middlewares/auth.middleware")

const router = express.Router()

router.post("/", auth, async (request, response)=>{
    try{
       const post = request.body
       const createdPost = await postsUsecase.createPost(post)

       response.json({
        success:true,
        message: "Post created",
        data: {createdPost}
       }) 

    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.get("/", async (request, response) => {
    try {
        const search = request.query.search

        let posts;
        if (search && search.trim() !== '') {
            posts = await postsUsecase.getAll(search)
        } else {
            posts = await postsUsecase.getAll()
        }

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


router.patch("/:id", auth, async (request, response)=>{
    try{

            const {id}= request.params
            const post = request.body
            const updatedPost = await postsUsecase.upDateById(id, post)

            response.json({
                success: true,
                message: "Post Update",
                data: {updatedPost}
            })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.delete("/:id", auth, async (request, response)=>{
    try{
            const{id}= request.params
            const userId = request.userId
            const deletedPost = await postsUsecase.deleteById(userId, id)

            response.json({
                success: true,
                message: "Post deleted",
                data: {deletedPost}
            })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router

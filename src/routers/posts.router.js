const express = require("express")
const postsUsecase = require("../usecases/posts.usacase")
const auth = require("../middlewares/auth.middleware")

const router = express.Router()

router.post("/", auth, (request, response)=>{
    try{

    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.get("/", (request, response)=>{
    try{

    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.patch("/:id", auth, (request, response)=>{
    try{

    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.delete("/:id", auth, (request, response)=>{
    try{

    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router

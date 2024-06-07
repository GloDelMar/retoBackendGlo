const express = require("express")
const usersUsecase = require("../usecases/users.usecase")


const router = express.Router()

router.get("/:id", (request, response)=>{
    try{

    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post("/", (request, response)=>{
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
const express = require("express")
const usersUsecase = require("../usecases/users.usecase")


const router = express.Router()

router.get("/:id", async (request, response)=>{
    try{
        const {id}= request.params
        const user = await usersUsecase.getById(id)

        response.json({
            success: true,
            message: "User found",
            data: user
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post("/", async (request, response)=>{
    try{
        const user = request.body
        const createdUser = await usersUsecase.create(user)

        response.json({
            success: true,
            message: "User created",
            data: {createdUser}
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
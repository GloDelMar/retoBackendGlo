const cors = require("cors")
const express = require("express")

const postsRouter = require("./routers/posts.router")
const usersRouter = require("./routers/users.routers")
const authRouter = require("./routers/auth.router")


const app = express()

app.use(cors())
app(express.json())

app.use("/posts", postsRouter)
app.use("/users", usersRouter)
app.use("auth", authRouter)

app.get("/", (request, response)=>{
    response.json({
        message: "Blog APIv1"
    })
})


module.exports = app
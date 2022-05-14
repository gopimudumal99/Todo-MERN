const express = require("express")
const todoRoute = require("./routes/todoRoute")
const errorMiddleware = require("./middlewares/errors")

const app = express()


app.use(express.json())


//Routes
app.use("/api/v1",todoRoute)



//erroMiddleware
app.use(errorMiddleware)



module.exports = app

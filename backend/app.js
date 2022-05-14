const express = require("express")
const todoRoute = require("./src/routes/todoRoute")
const errorMiddleware = require("./src/middlewares/errors")
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors())


//Routes
app.use("/api/v1",todoRoute)


//erroMiddleware
app.use(errorMiddleware)



module.exports = app

const express = require("express")
const todoRoute = require("./routes/todoRoute")

const app = express()


app.use(express.json())


//Routes
app.use("/api/v1",todoRoute)



module.exports = app

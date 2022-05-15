const express = require("express")
const todoRoute = require("./src/routes/todoRoute")
const errorMiddleware = require("./src/middlewares/errors")
const cors = require('cors')
const path = require("path")
const app = express()


//config file
//in heroku i give env varible NODE_ENV = "PRODUCTION" on the time heroku not took this file
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:"backend/src/configs/config.env"})
}

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors())

//Routes
app.use("/api/v1",todoRoute)

app.use(express.static(path.join(__dirname,"../frontend/dist")))

// we run only one server from backend so if have any url then only this file is returned
//bcz react only chage root file so i fix in backend also
//by this we can run only backend file http://localhost:8000 without forntend run
//after then i deleted the dist file in frontend because once deploy in heroku then heroku only create the file inside
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/dist/index.html"))
})


//erroMiddleware
app.use(errorMiddleware)



module.exports = app

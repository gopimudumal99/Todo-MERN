const app = require("./app")
const connectDatabase = require("./src/configs/db")


//config file
//in heroku i give env varible NODE_ENV = "PRODUCTION" on the time heroku not took this file
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:"backend/src/configs/config.env"})
}

//DB connecting...
connectDatabase()


app.listen(process.env.PORT,()=>{
    console.log(`Listting on Port http://localhost:${process.env.PORT}`)
})
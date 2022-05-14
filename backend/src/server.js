const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./configs/db")


//config file
dotenv.config({path:"backend/src/configs/config.env"})

//DB connecting...
connectDatabase()


app.listen(process.env.PORT,()=>{
    console.log(`Listting on Port http://localhost:${process.env.PORT}`)
})
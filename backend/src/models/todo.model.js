const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please provide the task name"]
    },
    completed:{
        type:Boolean,
        default:false
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("Todo",todoSchema)
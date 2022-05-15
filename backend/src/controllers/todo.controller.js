const Todo = require("../models/todo.model")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const ErrorHandler = require("../utils/errorHandler")
//Create Todo
exports.createTodo = catchAsyncErrors(async(req,res,next) =>{
        const todo = await Todo.create(req.body)
        res.status(201).json({
            succcess:true,
            todo
        })
})

//Get All Todo
exports.getAllTodo = catchAsyncErrors(async(req,res,next)=>{
        // const currentPage = req.query.page || 1
        // const resultPerPage = 5
        // const skip = resultPerPage*(currentPage-1)
        // const count = await Todo.countDocuments()
        // const todos = await Todo.find().limit(resultPerPage).skip(skip)
       const todos = await Todo.find()
        res.status(200).json({
            succcess:true,
            todos,
        })
})

// Updating todo
exports.updatingTodo = catchAsyncErrors(async(req,res,next)=>{
        let todo = await Todo.findById(req.params.id)
        if(!todo){
            return next(new ErrorHandler("todo not found",404))
        }
        todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            succcess:true,
            todo
        })
})

//deleting Todo
exports.deleteTodo =catchAsyncErrors(async(req,res,next)=>{
        let todo = await Todo.findById(req.params.id)

        if(!todo) return next(new ErrorHandler("todo not found",404))
        
        todo = await Todo.findByIdAndDelete(req.params.id)

        res.status(200).json({
            succcess:true,
            message: "delted succefully"
        })  
})



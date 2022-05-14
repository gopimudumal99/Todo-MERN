const Todo = require("../models/todo.model")


//Create Todo
exports.createTodo = async(req,res) =>{
    try{    
        const todo = await Todo.create(req.body)
        res.status(201).json({
            succcess:true,
            todo
        })

    }catch(error){
        res.status(404).json({
            succcess:false,
            error
        })
    }

}

//Get All Todo
exports.getAllTodo = async(req,res)=>{
    try {
        const todos = await Todo.find()
        res.status(200).json({
            succcess:true,
            todos
        })
    } catch (error) {
        res.status(404).json({
            succcess:false,
            error
        })
    }
}

// Updating todo
exports.updatingTodo = async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(req.parmas.id,req.body,{new:true})
        res.status(200).json({
            succcess:true,
            todo
        })
    } catch (error) {
        res.status(404).json({
            succcess:false,
            error
        })
    }
}

//deleting Todo
exports.deleteTodo = async(req,res)=>{
    try{
        let todo = await Todo.findById(req.params.id)
        if(!todo){
            res.status(404).json({
                succcess:"false",
                message:"todo not found"
            })
        }
         todo = await Todo.findByIdAndDelete(req.params.id)

        res.status(200).json({
            succcess:true,
            message: "delted succefully"
        })
    }
    catch(error){
        res.status(404).json({
            succcess:false,
            error
        })
    }
}



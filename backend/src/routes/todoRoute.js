const express = require('express')
const router = express.Router()
const {createTodo,getAllTodo,updatingTodo,deleteTodo} = require("../controllers/todo.controller")


router.route("/todos").get(getAllTodo)

router.route("/todos/new").post(createTodo)

router.route("/todos/:id").put(updatingTodo).delete(deleteTodo)


module.exports = router
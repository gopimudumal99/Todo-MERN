import axios from 'axios'
const task_api = "http://localhost:8000/api/v1"

const addTodo = function(task){
    return axios.post(`${task_api}/todos/new`,{title:task})
}

const getTodos = function(){
    return axios.get(`${task_api}/todos`)
}

const updateTodos = function(id,task){
    return axios.put(`${task_api}/todos/${id}`,{title:task})
}

const deleteTodo = function(id){
    return axios.delete(`${task_api}/todos/${id}`)
}

export {addTodo,getTodos,updateTodos,deleteTodo}
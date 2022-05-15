import React,{useContext,useState} from "react";
import { deleteTodo, updateTodos } from "../service/taskServices";
import {DataContext} from "./DataProvider"

function Footer() {
  const [checkAll,setCheckAll] = useState(false)
  const [todos,setTodos] = useContext(DataContext)


  const handleCheckAll = ()=>{
    if(!checkAll){
      todos.forEach(todo=>{
          todo.completed = false
      })
    }
    todos.forEach(todo=>{
      todo.completed = !todo.completed
       updateTodos(todo)
    })
    setCheckAll(!checkAll)
  }

  const handleDeleteSelected = () =>{
    todos.forEach(todo=>{
      if(todo.completed){
        return deleteTodo(todo._id)
      }
    })
    setCheckAll(false)  
  }

  const countTodo = ()=>{
    return todos.filter(todo=>todo.completed === false).length
  }

  return (
    <>
      {todos.length === 0 ? (<h2>Congratulations! Nothing To Do</h2>) :
(
    <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll || countTodo() === 0} />
        ALL
      </label>
      <p>You have {countTodo()} to do</p>
      <button onClick={handleDeleteSelected} id="delete">Delete</button>
    </div>

      )}
    </>
  );
}

export default Footer;

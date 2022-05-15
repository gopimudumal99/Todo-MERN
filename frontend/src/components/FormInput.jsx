import React,{useContext, useState} from "react";
import { addTodo } from "../service/taskServices";
import { DataContext } from "./DataProvider";
function FormInput() {
    const [todos,setTodos] = useContext(DataContext)
    const [todoTitle,setTodoTitle] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(todoTitle)   //server request
        setTodoTitle("")
    }
    
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text" name="todos"id="todos"
        required placeholder="What needs to be done?"
        value={todoTitle}
        onChange={e=>setTodoTitle(e.target.value.toLocaleLowerCase())}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default FormInput;

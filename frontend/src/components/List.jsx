import React,{useContext} from "react";
import ListItem from "./ListItem";
import {DataContext} from "./DataProvider"
import { updateTodos } from "../service/taskServices";

function List() {
    const[todos,setTodos] = useContext(DataContext)

    const switchComplete = (todo)=>{
        todo.completed = !todo.completed
        updateTodos(todo)
    }

    const changeTodTitle = (todo,editValue) =>{
        todo.title=editValue
        updateTodos(todo)
    }

  return (
    <ul>
        {
            todos.map((todo,index)=>(
                <ListItem key={todo._id} todo={todo} id={todo._id} changeTodTitle={changeTodTitle} checkCompleted={switchComplete}/>
            ))
        }
    </ul>
  );
}

export default List;

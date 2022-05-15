import React, { useState } from "react";


function ListItem({todo,id,checkCompleted,changeTodTitle}) {
    const[onEdit,setOnEdit] = useState(false)
    const [editValue,setEditValue] = useState(todo.title)

    const handleEdit = () =>{
        setOnEdit(true)
    }

    const handleUpdateTodo = (todo)=>{
        setOnEdit(false)
        if(editValue){
            changeTodTitle(todo,editValue)
        }else{
            changeTodTitle(todo,todo.title)
        }
    }

    if(onEdit){
        return (
            <li>
                <input type="text" id="editValue" value={editValue}
                name="editValue" onChange={ e => setEditValue(e.target.value.toLowerCase())}
                />
                <button onClick={()=>handleUpdateTodo(todo)}>Save</button>
            </li>
        )
    }else{        
        return (
          <li>
            <label htmlFor={id} className={todo.completed?"active":""}>
              <input type="checkbox" name="" id={id} checked={todo.completed}
              onChange={()=>checkCompleted(todo)}
              />
      
              {todo.title}
            </label>
            <button disabled={todo.completed} onClick={handleEdit}>Edit</button>
          </li>
        );
    }
}

export default ListItem;

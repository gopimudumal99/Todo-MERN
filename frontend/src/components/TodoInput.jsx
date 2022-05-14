import React,{useState,useEffect} from 'react'
import {addTodo, getTodos} from "../service/taskServices"
import TodoList from './TodoList'
function TodoInput(){
    const [todos,setTodos] = useState([])
    const [task,setTask] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [count,setCount] = useState("")
    useEffect(()=>{
        const  getDataTodos = async()=>{
            setIsLoading(true)
            let {data} = await getTodos( )
            setTodos(data.todos)
            setCount(Math.ceil(data.count/data.resultPerPage))
            setIsLoading(false)
        }
        getDataTodos()
    },[])
    

    const handleInput = (e) =>{
        setTask(e.target.value)
    }

    const handleSubmit = async(e) =>{
        setIsLoading(true)
        e.preventDefault()
        let {data} = await addTodo(task)
        setIsLoading(false)
    }

    const Pagination = () =>{
        let pagesArr= []
        for(let i =1; i<=count;i++){
            
        }
    }

    return <div className='todo'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleInput} placeholder='add task....' />
            <button type='submit'>add</button>
        </form>
        <div className='todos'> 
                {isLoading?<h3>Loading.....</h3>:( <div>
                    {todos && todos.map(el=><TodoList key={el._id} task={el.title}/>)}
                </div>
                )}
        </div>
    </div>
}

export default TodoInput
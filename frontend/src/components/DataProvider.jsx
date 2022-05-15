import React, {useEffect,createContext,useState} from 'react'
import { getTodos } from '../service/taskServices'

export const DataContext = createContext()

export const DataProvider = (props) =>{
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const {data} = await getTodos()
            setTodos(data.todos)
        }
        getData()
    },[todos])

  return (
    <DataContext.Provider value={[todos,setTodos]}>
        {props.children}
    </DataContext.Provider>
  )
}


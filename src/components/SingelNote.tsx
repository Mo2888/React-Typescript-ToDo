import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models/model'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
 import {IoIosDoneAll} from "react-icons/io"

interface Props {
  todos:Array<Todo>
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
  todo:Todo
}

const SingelNote = ({todos,setTodos,todo}:Props) => {

  const [edit,setEdit]=useState<boolean>(false)
  const [editNote,setEditNote]=useState<string>(todo.todo)

  const inputDEdit = useRef<HTMLInputElement>(null)

  useEffect(()=>{
inputDEdit.current?.focus();
  },
  [edit])
  

const handleEdit=(e:React.FormEvent,id:number)=>{
e.preventDefault();
setTodos(todos.map(todo => (todo.id ===id ? {...todo,todo:editNote} : todo)
))
setEdit(false)
}

  const handleDone = (id:number)=>{
    setTodos(todos.map(todo=> todo.id===id?{...todo,isDone:!todo.isDone}:todo))
  }
  const handleDelete =(id:number)=>{
  setTodos( todos.filter(todo => todo.id!==id))
  }

  return (<form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>

    {edit ? (<input ref={inputDEdit} className="todos__single--text" value={editNote} onChange={(e)=>setEditNote(e.target.value)} />
        ): todo.isDone?(<s className='todos__single--text'>{todo.todo}</s>
    ):(
     <span className='todos__single--text'>{todo.todo}</span>
    )
       }

  
   
    <div>
      <span className='icon' onClick={()=>{
        if(!edit && !todo.isDone){
          setEdit(!edit)
        }
      }}> <AiFillEdit /></span>
      <span className='icon' onClick={()=>handleDelete(todo.id)}> <AiFillDelete /></span>
      <span className='icon' onClick={()=>handleDone(todo.id)}> <IoIosDoneAll /></span>
    </div>
  </form>
  )
}
 
export default SingelNote
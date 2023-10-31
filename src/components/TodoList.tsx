
import React from 'react'
import { Todo } from '../models/model'
import SingelNote from './SingelNote'

interface Props{
todos:Array<Todo>
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList = ({todos,setTodos}:Props) => {
  return (
          <div className='container' >
            <span className="todos__heading">Completed Tasks</span>
            {todos?.map((todo) => <SingelNote key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
          </div>
    

  )
}

export default TodoList
import { useState } from 'react'
import TodoInput from '../src/components/TodoInput'
import TodoList from './components/TodoList'
function App() {
  const [list, setList]= useState([]) 

  const handleAdd=(newtask)=>{
    const newTodo = [...list, newtask]
    setList(newTodo)
  }
  const handleDelete=(index)=>{
    const newTodo = list.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    setList(newTodo)
  }

  return (
    <section className='container'>
      <h1 className='todoheader'>TodoList</h1>
      <TodoInput handleAdd={handleAdd}/>
      <TodoList list={list} handleDelete={handleDelete} />
    </section>
  )
}

export default App

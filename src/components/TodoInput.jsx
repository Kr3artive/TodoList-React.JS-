import React, { useState } from 'react'

const TodoInput = (props) => {
    const {handleAdd} = props
    const [todoValue, setTodoValue] = useState('')
    const handleChange=(e)=>{
        setTodoValue(e.target.value)
    }
  return (
    <header>
        <input className='maininput' value={todoValue} onChange={handleChange} type="text" placeholder='Enter A Todo...' />
        <button onClick={
            ()=>{
                handleAdd(todoValue),
                setTodoValue('')
            }}>ADD</button>
    </header>
  )
}

export default TodoInput

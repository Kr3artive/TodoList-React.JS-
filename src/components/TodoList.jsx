import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => { 
    const {list} = props
  return (
    <div className='main'>
        {list.map((todo, todoIndex)=>{
            return(
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </div>
  )
}

export default TodoList

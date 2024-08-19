import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa"

const TodoCard = (props) => {
    const {children, handleDelete, index} = props
  return (
    <div className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={()=>{
                handleDelete(index)
            }}>
                <FaRegTrashAlt />
            </button>
        </div>
      
    </div>
  )
}

export default TodoCard

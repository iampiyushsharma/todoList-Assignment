import React, { useState, useEffect } from 'react'


import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const TodoC = ({text,updateMode, deleteToDo,id}) => {
  
  

  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem(id)) || false
  )

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(isChecked))
  }, [isChecked, id])

  const textClassName = isChecked ? 'text checked' : 'text'

  return (
    <div className='todo'>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}  />
        <div className='text' >{text}</div>
        <div className='icons'>
            <BiEdit className='icon' onClick={updateMode} />
            <AiFillDelete className='icon' onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default TodoC
import React from 'react'

const ToggleBtn = ({setOpen}) => {
  return (
    <button onClick={()=>{setOpen(prev=>!prev)}}>Toggle</button>
  )
}

export default ToggleBtn

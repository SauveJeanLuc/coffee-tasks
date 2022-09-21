import React from 'react'

export default function ToDoContainer() {
  const todoContainerStyles = {
    backgroundColor: '#E5D8D8',
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '5px',
  }

  const spanStyle ={
    color: '#fff',
    fontWeight: '600',
  }

  return (
    <div style={todoContainerStyles}>
      <span style={spanStyle}>No ToDos</span>
    </div>
  )
}

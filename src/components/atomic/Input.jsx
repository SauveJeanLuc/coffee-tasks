import React from 'react'

export default function Input() {
  const inputStyles = {
    padding: '10px 9px',
    border: '1px solid #611707',
    borderRadius: '5px',
    marginBottom: '10px',
    width: '100%',
  }

  const containerStyles = {
    width: '100%',
  }

  return (
    <div style={containerStyles}>
        <input type="text" style={inputStyles} placeholder="Add a new task" />
    </div>
  )
}

import React from 'react'

export default function Button() {

  const button = {
    backgroundColor: '#611707',
    color: '#fff',
    padding: '6px 12px',
    border: ' 1px solid #611707',
    borderRadius: '5px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamilly: 'Poppins',
    letterSpacing: '1px',
  } 

  return (
    <div>
        <button style={button}>Add Task</button>
    </div>
  )
}

import React from 'react'

export default function Button({margin, title, isColorFlipped, clickHandler}) {

  const button = {
    backgroundColor: isColorFlipped ? '#fff' : '#611707',
    color: isColorFlipped? '#611707' : '#fff',
    padding: '6px 12px',
    border: ' 1px solid #611707',
    borderRadius: '5px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamilly: 'Poppins',
    letterSpacing: '1px',
    margin: `${margin}`,
  } 

  return (
    <div>
        <button onClick={clickHandler} style={button}>{title}</button>
    </div>
  )
}

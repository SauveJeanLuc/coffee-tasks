import React from 'react'
import Button from './atomic/Button'
import SelectButton from './atomic/SelectButton'

export default function Nav() {
    const navStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #611707',
    }

  return (
    <div className='nav' style={navStyles}>
      <Button/>
      <SelectButton/>
    </div>
  )
}

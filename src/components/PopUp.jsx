import React from 'react'
import SelectButton from './atomic/SelectButton'
import Input from './atomic/Input'
import Button from './atomic/Button'
import multiply from '../assets/multiply.svg'


export default function PopUp () {
  const popUpContainerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const popUpSizer = {
    width: '25%',
  }

  const popUpStyles = {
    backgroundColor: '#E5D8D8',
    borderRadius: '5px',
    padding: '1em 2em 2em 5em',
  }


  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '2em',
  }

  const buttonsStyles = {
    display: 'flex',
  }

  const closeContainerStyles = {
    width: '10%',
    backgroundColor: '#E5D8D8',
    borderRadius: '2px',
    marginBottom: '0.5em',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
  }

  const closeLogoStyles = {
    width: '70%',
  }

  return (
    <div style={popUpContainerStyles}>
        <div style={popUpSizer}>
            <div style={closeContainerStyles}>
                <img src={multiply} style={closeLogoStyles} alt="logo" />
            </div>
            <div style={popUpStyles}>
                <h2>Add TODO</h2>
                <div style={formStyles}>
                    <label htmlFor="">Title</label>
                    <Input/>
                    <label htmlFor="">Status</label>
                    <SelectButton width={'100%'}/>
                </div>
                <div style={buttonsStyles}>
                    <Button margin={'0em 0.5em 0em 0em'} title={'Add Task'}/>
                    <Button margin={'0em 0.5em 0em 0em'} title={'Cancel'} isColorFlipped={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

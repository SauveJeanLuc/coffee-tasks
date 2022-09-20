import React from 'react'
import Select from 'react-select';

export default function SelectButton() {
  
  const buttonStyles = {
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    fontFamilly: 'Poppins',
    letterSpacing: '1px',
    width: '155px',
  } 

  const colourStyles = {

    control: (styles) => ({
      ...styles,
      border: '1px solid #611707',
      padding: '3px 2px',
    }),

    option: (styles, {isDisabled, isFocused, isSelected, isFixed }) => {
        return {
          ...styles,
          backgroundColor: isFocused ? '#fff' : isSelected ? '#611707' : isDisabled ? 'red' : isFixed ? 'green' : '#fff',
          color: isSelected ? '#fff' : '#611707',
          ':active': {
            ...styles[':active'],
            backgroundColor: '#fff',
          }
        };
    },
  
    menu: () => ({
      color: '#611707',
    }),

  };

  return (
    <>
    <div style={buttonStyles}>
      <Select
        onChange={newValue => console.log(newValue)}
        options={[
          { value: 'all', label: 'All' },
          { value: 'complete', label: 'Complete' },
          { value: 'incomple', label: 'Incomplete' },
        ]}
        styles={colourStyles}
      />
    </div>
    </>
  )
}

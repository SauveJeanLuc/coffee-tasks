import React from 'react'
import Select from 'react-select';

export default function SelectButton(width) {
  
  const buttonStyles = {
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    fontFamilly: 'Poppins',
    letterSpacing: '1px',
    width: `${width}`,
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
          backgroundColor: (isFocused && isSelected) ? '#611707' : isFocused ? '#fff' : isSelected ? '#611707' :  isDisabled ? 'red' : isFixed ? 'green' : '#fff',
          color: (isFocused && isSelected) ? '#fff' : isSelected ? '#fff' : '#611707',
          ':active': {
            ...styles[':active'],
            backgroundColor: '#fff',
          }
        };
    },
  
    menu: () => ({
      color: '#611707',
      zIndex: 9999
    }),

    menuPortal: (styles) => ({
      ...styles,
      zIndex: 9999
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
          { value: 'incomplete', label: 'Incomplete' },
        ]}
        styles={colourStyles}
      />
    </div>
    </>
  )
}

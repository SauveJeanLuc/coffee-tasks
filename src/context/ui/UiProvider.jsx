import React, { useState } from 'react'
import { UiContext } from  './UiContext';
import PropTypes from 'prop-types';

export const UiProvider = ({ children }) => {

    const [popUpvisible, setPopUpvisible] = useState(false)

    const handlePopUp = () => {
      setPopUpvisible(
        prevState => !prevState
      )
    }

  return (
    <UiContext.Provider value={{
        popUpvisible,
        handlePopUp
    }}>
        {children}
    </UiContext.Provider>
  )
}

UiProvider.propTypes = {
    children: PropTypes.any
}
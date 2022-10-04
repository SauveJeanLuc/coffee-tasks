import React, { useState } from 'react'
import { UiContext } from  './PopUpContext';
import PropTypes from 'prop-types';

export const PopUpProvider  = ({ children }) => {

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

PopUpProvider .propTypes = {
   children: PropTypes.any
}
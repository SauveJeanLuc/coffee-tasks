import React, { useState } from 'react'
import { PopUpContext } from  './PopUpContext';
import PropTypes from 'prop-types';

export const PopUpProvider  = ({ children }) => {

    const [popUpvisible, setPopUpvisible] = useState(false)

    const handlePopUp = () => {
      setPopUpvisible(
        prevState => !prevState
      )
    }

  return (
    <PopUpContext.Provider value={{
        popUpvisible,
        handlePopUp
    }}>
        {children}
    </PopUpContext.Provider>
  )
}

PopUpProvider .propTypes = {
   children: PropTypes.any
}
import PropTypes from 'prop-types'
import React, { useState } from "react"

export default function Button({
  margin,
  title,
  isColorFlipped,
  clickHandler,
}) {
  const [hover, setHover] = useState(false);

  const button = {
    cursor: 'pointer',
    backgroundColor: isColorFlipped ? '#fff' : '#611707',
    color: isColorFlipped? '#611707' : '#fff',
    padding: '6px 12px',
    border: ' 1px solid #611707',
    borderRadius: '5px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'Poppins',
    letterSpacing: '1px',
    margin: `${margin}`,
    transform: hover && "translateY(-3px)",
    boxShadow: hover && "0px 2px 2px 2px rgb(97, 23, 7)",
  };

  return (
    <div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clickHandler}
        style={button}
      >
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  margin: PropTypes.string,
  title: PropTypes.string,
  isColorFlipped: PropTypes.bool,
  clickHandler: PropTypes.func
}

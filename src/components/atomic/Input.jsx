import React from "react";
import PropTypes from "prop-types";

export default function Input({ onChangeHandler }) {
  const inputStyles = {
    padding: "10px 0px",
    border: "1px solid #611707",
    borderRadius: "5px",
    marginBottom: "10px",
    width: "100%",
  };

  const containerStyles = {
    width: "100%",
  };

  return (
    <div style={containerStyles}>
      <input
        onChange={onChangeHandler}
        type="text"
        style={inputStyles}
        placeholder=" Add a new task"
      />
    </div>
  );
}

Input.propTypes = {
  onChangeHandler: PropTypes.func,
}

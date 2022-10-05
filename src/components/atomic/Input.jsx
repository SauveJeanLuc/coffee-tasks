import React from "react";
import PropTypes from "prop-types";

export default function Input({ onChangeHandler }) {
  return (
    <div className="w-full">
      <input
        onChange={onChangeHandler}
        type="text"
        className="p-2 border-2 border-coffeeDark rounded-md w-full my-3"
        placeholder=" Add a new task"
      />
    </div>
  );
}

Input.propTypes = {
  onChangeHandler: PropTypes.func,
}

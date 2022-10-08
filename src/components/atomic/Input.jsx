import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ onChangeHandler, value, placeholder = 'Add a new task' }) {
  return (
    <div className="w-full">
      <input
        onChange={onChangeHandler}
        type="text"
        className="p-2 border-2 border-coffeeDark rounded-md w-full my-3"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

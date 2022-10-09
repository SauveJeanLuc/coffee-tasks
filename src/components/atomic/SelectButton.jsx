import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export default function SelectButton({ setValue, options }) {
  // styles to close button
  const customStyles = {
    control: (base, state) => ({
      ...base,
      // width: `80px`,
      border: '1px solid #611707',
      borderRadius: '5px',
      cursor:"pointer",
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        borderColor: '#611707',
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#611707' : '#fff',
      cursor:"pointer",
      color: state.isFocused ? '#fff' : '#611707',
      '&:active': {
        backgroundColor: '#611707',
        color: '#fff',
      },
    }),
    menu: base => ({
      ...base,
      borderRadius: '5px',
      marginTop: '0px',
    }),
    singleValue: base => ({
      ...base,
      color: '#611707',
    }),
  };
  return (
    <>
      <div className={`text-white text-xs font-semibold font-poppins tracking-widest sm:text-base`}>
        <Select onChange={newValue => setValue(newValue)} options={options} styles={customStyles} />
      </div>
    </>
  );
}

SelectButton.propTypes = {
  setValue: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

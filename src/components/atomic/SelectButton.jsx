import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

export default function SelectButton({ width, setValue, value }) {
  // styles to close button
  const customStyles = {
    control: (base, state) => ({
      ...base,
      width: `${width}`,
      border: "1px solid #611707",
      borderRadius: "5px",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: "#611707",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#611707" : "#fff",
      color: state.isFocused ? "#fff" : "#611707",
      "&:active": {
        backgroundColor: "#611707",
        color: "#fff",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "5px",
      marginTop: "0px",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#611707",
    }),
  };
  return (
    <>
      <div
        className={`text-white text-base font-semibold font-poppins tracking-widest w-[${width}]`}
      >
        <Select
          onChange={(newValue) => setValue(newValue)}
          options={[
            { value: "complete", label: "Complete" },
            { value: "incomplete", label: "Incomplete" },
          ]}
          styles={customStyles}
          value={value}
        />
      </div>
    </>
  );
}

SelectButton.propTypes = {
  width: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.string,
}


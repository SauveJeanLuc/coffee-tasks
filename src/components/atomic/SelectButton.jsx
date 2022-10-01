import React from "react";
import Select from "react-select";

export default function SelectButton({ width, setValue }) {
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

  const buttonStyles = {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    fontFamilly: "Poppins",
    letterSpacing: "1px",
    width: `${width}`,
  };

  // not used
  // const colourStyles = {
  //
  //   control: (styles) => ({
  //     ...styles,
  //     border: '1px solid #611707',
  //     padding: '3px 2px',
  //   }),
  //
  //   option: (styles, {isDisabled, isFocused, isSelected, isFixed }) => {
  //       return {
  //         ...styles,
  //         backgroundColor: (isFocused && isSelected) ? '#611707' : isFocused ? '#fff' : isSelected ? '#611707' :  isDisabled ? 'red' : isFixed ? 'green' : '#fff',
  //         color: (isFocused && isSelected) ? '#fff' : isSelected ? '#fff' : '#611707',
  //         ':active': {
  //           ...styles[':active'],
  //           backgroundColor: '#fff',
  //         }
  //       };
  //   },
  //
  //   menu: () => ({
  //     color: '#611707',
  //     zIndex: 9999
  //   }),
  //
  //   menuPortal: (styles) => ({
  //     ...styles,
  //     zIndex: 9999
  //   }),
  //
  // };

  return (
    <>
      <div style={buttonStyles}>
        <Select
          onChange={(newValue) => setValue(newValue)}
          options={[
            { value: "complete", label: "Complete" },
            { value: "incomplete", label: "Incomplete" },
          ]}
          styles={customStyles}
        />
      </div>
    </>
  );
}

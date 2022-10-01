import React from "react";
import coffeelogo from "../assets/coffee-to-go.svg";

export default function Header() {
  const headerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const textStyle = {
    color: "#611707",
    fontSize: "30px",
    fontWeight: "1000",
  };

  const logoStyle = {
    width: "40px",
    margin: "0 10px",
  };

  return (
    <div style={headerStyles}>
      <img src={coffeelogo} style={logoStyle} alt="logo" />
      <span style={textStyle}>Coffee Tasks</span>
    </div>
  );
}

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
    <div className="flex justify-center my-4">
      <img src={coffeelogo} style={logoStyle} alt="logo" />
      <span className="text-coffeeDark text-3xl font-extrabold">Coffee Tasks</span>
    </div>
  );
}

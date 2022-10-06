import React from "react";
import coffeelogo from "../assets/coffee-to-go.svg";

export default function Header() {
  return (
    <div className="flex justify-center my-4">
      <img src={coffeelogo} className="w-10 mx-3" alt="logo" />
      <span className="text-coffeeDark text-3xl font-extrabold border-b-2 border-b-red-900">
        Coffee Tasks
      </span>
    </div>
  );
}

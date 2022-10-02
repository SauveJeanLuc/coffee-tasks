import React, { useState } from "react";
import Button from "./atomic/Button";
import SelectButton from "./atomic/SelectButton";
import PopUp from "./PopUp";

export default function Nav() {

  const [popUpvisible, setPopUpvisible] = useState(false)

  const navStyles = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #611707",
  };

  const handlePopUpOpen = (e) => {
    setPopUpvisible(true)
  }

  return (
    <div className="nav" style={navStyles}>
      <Button
      clickHandler={handlePopUpOpen}
      margin={"0em"} title={"Add task"} />
      <SelectButton width={"155px"} />
      <PopUp visible={popUpvisible} trigger={setPopUpvisible}/>
    </div>
  );
}

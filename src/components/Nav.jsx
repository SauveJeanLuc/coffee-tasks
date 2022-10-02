import React, { useState } from "react";
import Button from "./atomic/Button";
import SelectButton from "./atomic/SelectButton";
import PopUp from "./PopUp";

export default function Nav() {

  const [popUpvisible, setPopUpvisible] = useState(false)

  const handlePopUpOpen = () => {
    setPopUpvisible(true)
  }

  return (
    <div className="flex justify-between px-5 py-2.5 border-b-2 border-coffeeDark">
      <Button
        clickHandler={handlePopUpOpen}
        className="m-0"
      title={"Add task"} />
      <SelectButton width={"155px"} />
      <PopUp visible={popUpvisible} trigger={setPopUpvisible}/>
    </div>
  );
}

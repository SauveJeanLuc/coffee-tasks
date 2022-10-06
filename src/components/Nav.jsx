import React, { useState } from "react";
import Button from "./atomic/Button";
import SelectButton from "./atomic/SelectButton";
import PopUp from "./PopUp";
import propTypes from "prop-types";
export default function Nav({ setTodos }) {
  const [popUpvisible, setPopUpvisible] = useState(false);

  const handlePopUpOpen = () => {
    setPopUpvisible(true);
  };

  return (
    <div className="flex justify-between px-5 py-2.5 border-b-2 border-coffeeDark">
      <PopUp
        visible={popUpvisible}
        trigger={setPopUpvisible}
        setTodos={setTodos}
      />
      <Button
        clickHandler={handlePopUpOpen}
        className="m-0 cursor-pointer"
        title={"Add task"}
      />
      <SelectButton width={"155px"} />
    </div>
  );
}

Nav.propTypes = {
  setTodos: propTypes.func.isRequired,
};

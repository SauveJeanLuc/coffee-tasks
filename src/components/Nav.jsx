import React, { useContext } from "react";
// import { TaskContext } from "../context/Task/TaskContext";
import { PopUpContext } from "../context/ui/PopUpContext";
import { useTasks } from "../hooks/useTasks";
import Button from "./atomic/Button";
import SelectButton from "./atomic/SelectButton";
import PopUp from "./PopUp";

export default function Nav() {
  
  const {  popUpvisible, handlePopUp } = useContext(PopUpContext);
  const { setStatus } = useTasks();

  return (
    <div className="flex justify-between px-5 py-2.5 border-b-2 border-coffeeDark">
      <PopUp
        visible={popUpvisible}
        trigger={setPopUpvisible}
        setTodos={setTodos}
      />
      <Button
        clickHandler={handlePopUp}
        className="m-0"
        title={"Add task"} />
      <SelectButton width={"155px"} setValue={setStatus}  />
      <PopUp visible={popUpvisible} trigger={handlePopUp}/>
    </div>
  );
}
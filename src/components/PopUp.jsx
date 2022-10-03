import PropTypes from "prop-types";
import React, { useState } from "react";
import SelectButton from "./atomic/SelectButton";
import Input from "./atomic/Input";
import Button from "./atomic/Button";
import multiply from "../assets/multiply.svg";



export default function PopUp(props) {
  const [prevTasks, setPrevTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );
  const [status, setStatus] = useState("");
  const [currentTask, setCurrentTask] = useState("");

  const handleInputChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleClosePupUp = () => {
    props.trigger(false)
  }


  const addTask = () => {
    if (status == "" || currentTask == "") {
      alert("both Title and status are mandatory !");
    } else {
      const updatedTasks = [
        ...prevTasks,
        { title: currentTask, status: status.value },
      ];
      setPrevTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      window.location.reload(false);
    }
  };

  return (
    <div className={`${props.visible ? `scale-100` : `scale-0`} flex absolute inset-0 w-full h-full bg-black/50 flex-col justify-center items-center`}>
      <div className={"lg:w-2/5 w-4/5"}>
        <div className="w-[10%] bg-coffeePrimaryLight mb-2 flex justify-center ml-auto cursor-pointer">
          <img 
          onClick={handleClosePupUp}
          src={multiply} className="w-4/6" alt="logo" />
        </div>
        <div className="bg-coffeePrimaryLight rounded-md p-8 pl-4">
          <h2 className="font-extrabold text-lg">Add TODO</h2>
          <div className="flex flex-col pb-8">
            <label htmlFor="">Title</label>
            <Input onChangeHandler={handleInputChange} />
            <label htmlFor="">Status</label>
            <SelectButton setValue={setStatus} width={"100%"} />
          </div>
          <div className="flex justify-around mt-2">
            <Button
              clickHandler={addTask}
              title={"Add Task"}
            />
            <Button
              clickHandler={handleClosePupUp}
              title={"Cancel"}
              isColorFlipped={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
PopUp.propTypes = {
  trigger: PropTypes.func,
  visible: PropTypes.bool,
};

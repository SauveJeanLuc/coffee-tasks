import PropTypes from "prop-types";
import React, { useState } from "react";
import SelectButton from "./atomic/SelectButton";
import Input from "./atomic/Input";
import Button from "./atomic/Button";
import multiply from "../assets/multiply.svg";
import { v4 as uuid } from "uuid";

export default function PopUp(props) {
  const [status, setStatus] = useState("");
  const [currentTask, setCurrentTask] = useState("");

  const handleInputChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleClosePupUp = () => {
    defaultState();
  };
  const defaultState = () => {
    setStatus("");
    setCurrentTask("");
    props.trigger(false);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (status === "" || currentTask === "")
      return alert("both Title and status are mandatory !");
    const newTodo = { title: currentTask, status: status.value, id: uuid() };

    props.setTodos((state) => [...state, newTodo]);
    defaultState();
  };

  return (
    <div
      className={`${
        props.visible ? `scale-100` : `scale-0`
      } flex absolute inset-0 w-full h-full bg-black/50 flex-col justify-center items-center`}
    >
      <div className={"w-4/5 max-w-sm"}>
        <div className="w-[10%] bg-coffeePrimaryLight mb-2 flex justify-center ml-auto cursor-pointer">
          <img
            onClick={handleClosePupUp}
            src={multiply}
            className="w-4/6"
            alt="logo"
          />
        </div>
        <div className="bg-coffeePrimaryLight rounded-md p-8 px-6 md:px-9">
          <h2 className="font-extrabold text-lg">Add TODO</h2>
          <div className="flex flex-col pb-8">
            <label htmlFor="">Title</label>
            <Input onChangeHandler={handleInputChange} value={currentTask} />
            <label htmlFor="">Status</label>
            <SelectButton setValue={setStatus} width={"100%"} />
          </div>
          <div className="flex justify-between md:justify-start mt-2">
            <Button
              clickHandler={addTask}
              title={"Add Task"}
              className="md:mr-9"
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
  setTodos: PropTypes.func,
};

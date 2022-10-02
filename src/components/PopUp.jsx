import React, { useState } from "react";
import SelectButton from "./atomic/SelectButton";
import Input from "./atomic/Input";
import Button from "./atomic/Button";
import multiply from "../assets/multiply.svg";

export default function PopUp() {
  const [prevTasks, setPrevTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );
  const [status, setStatus] = useState("");
  const [currentTask, setCurrentTask] = useState("");

  const handleInputChange = (e) => {
    setCurrentTask(e.target.value);
  };

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
    }
  };

  const popUpContainerStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const popUpSizer = {
    minWidth: "275px",
    width: "30%",
    maxWidth: "450px"
  };

  const popUpStyles = {
    backgroundColor: "#E5D8D8",
    borderRadius: "5px",
    padding: "1em 2em 2em 2em",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "2em",
    width:"100%"
  };

  const buttonsStyles = {
    display: "flex",
    gap: "7px",
    justifyContent:"flex-start",
  };

  const closeContainerStyles = {
    width: "10%",
    backgroundColor: "#E5D8D8",
    borderRadius: "2px",
    marginBottom: "0.5em",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    marginLeft: "auto",
  };

  const closeLogoStyles = {
    width: "75%",
    padding:"0.1em 0.2em",
  };

  return (
    <div style={popUpContainerStyles}>
      <div style={popUpSizer}>
        <div style={closeContainerStyles}>
          <img src={multiply} style={closeLogoStyles} alt="logo" />
        </div>
        <div style={popUpStyles}>
          <h2>Add TODO</h2>
          <div style={formStyles}>
            <label htmlFor="">Title</label>
            <Input onChangeHandler={handleInputChange} />
            <label htmlFor="">Status</label>
            <SelectButton setValue={setStatus} width={"100%"} />
          </div>
          <div style={buttonsStyles}>
            <Button
              clickHandler={addTask}
              title={"Add Task"}
            />
            <Button
              title={"Cancel"}
              isColorFlipped={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

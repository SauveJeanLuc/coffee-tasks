
import PropTypes from "prop-types";
import React, {useEffect} from "react";
import SelectButton from "./atomic/SelectButton";
import Input from "./atomic/Input";
import Button from "./atomic/Button";
import multiply from "../assets/multiply.svg";
import { useTasks } from "../hooks/useTasks";


export default function PopUp({ visible, trigger }) {

  const { setStatus, addTask, handleInputChange, resetFields, currentTask, status  } = useTasks();

  useEffect(() => {
   if(!visible) {
      resetFields()
   }

   resetFields();

  }, [visible]);

  
  return (
    <div className={`${visible ? `scale-100` : `scale-0`} flex absolute inset-0 w-full h-full bg-black/50 flex-col justify-center items-center`}>
      <div className={"lg:w-2/5 w-4/5"}>
        <div className="w-[10%] bg-coffeePrimaryLight mb-2 flex justify-center ml-auto cursor-pointer">
          <img 
          onClick={trigger}
          src={multiply} className="w-4/6" alt="logo" />
        </div>
        <div className="bg-coffeePrimaryLight rounded-md p-8 pl-4">
          <h2 className="font-extrabold text-lg">Add TODO</h2>
          <div className="flex flex-col pb-8">
            <label htmlFor="">Title</label>
            <Input onChangeHandler={handleInputChange} value={currentTask} />
            <label htmlFor="">Status</label>
            <SelectButton setValue={setStatus} width={"100%"} value={status} />
          </div>
          <div className="flex justify-around mt-2">
            <Button
              clickHandler={addTask}
              title={"Add Task"}
            />
            <Button
              clickHandler={trigger}
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

import React from "react";
import { useTasks } from "../hooks/useTasks";
import { ListTask } from "./ListTask";
import { NoTask } from "./NoTask";

export default function ToDoContainer() {
  const { tasks } = useTasks();

  return (
    <>
      {tasks.length === 0
        ? <NoTask />
        : <ListTask />}
    </>
      
  );
}

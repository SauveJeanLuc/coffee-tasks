
import React from "react";
import { TaskProvider } from "./context/Task/TaskProvider";
import { UiProvider } from "./context/ui/UiProvider";
import { CoffeeTasks } from "./pages/CoffeeTasks";

function App() {
  return (
    <>
    <UiProvider>
        <TaskProvider>
            <CoffeeTasks />
        </TaskProvider>      
    </UiProvider>
    </>
  );
}

export default App;

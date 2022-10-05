
import React from "react";

import { TaskProvider } from "./context/Task/TaskProvider";
import { PopUpProvider  } from "./context/ui/PopUpProvider";
import { CoffeeTasks } from "./pages/CoffeeTasks";

function App() {
  return (
    <>
    <PopUpProvider >
        <TaskProvider>
            <CoffeeTasks />
        </TaskProvider>      
    </PopUpProvider >
    </>
  );
}

export default App;

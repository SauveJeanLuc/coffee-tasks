import React, { useEffect, useState } from "react";
import Button from "./components/atomic/Button";
import Header from "./components/Header";
import ToDoContainer from "./components/ToDoContainer";
import { useAddToHomeScreenPrompt } from "./utils/cutomHooks";


function App() {
  const [prompt, promptToInstall] = useAddToHomeScreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  useEffect(() => {
    if (prompt.state) {
      setVisibleState(true);
    } else {
      setVisibleState(false)
    }
  }, [prompt.state]);
  return (
    <>
      { isVisible 
        ? <div className="w-[80%] m-auto mt-6 text-end">
            <Button clickHandler={promptToInstall} title="Install"/>
          </div>
        : ''
      }
      <Header />
      <div className="w-[80%] flex flex-col m-auto mt-12 bg-white rounded-md md:w-[60%] lg:w-1/2">
        <ToDoContainer />
      </div>
    </>
  );
}

export default App;

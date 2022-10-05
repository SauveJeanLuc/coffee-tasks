import React from "react";
import Header from "./components/Header";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <>
      <Header />
      <div className="w-1/2 flex flex-col m-auto mt-12 bg-white rounded-md">
        <ToDoContainer />
      </div>
    </>
  );
}

export default App;

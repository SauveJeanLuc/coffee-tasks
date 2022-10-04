
import React from 'react'
import Header from "../components/Header";
import Nav from "../components/Nav";
import ToDoContainer from "../components/ToDoContainer";

export const CoffeeTasks = () => {
  return (
    <>
          <Header />
          <div className="w-1/2 flex flex-col gap-y-9 m-auto mt-12 bg-white rounded-md">
              <Nav />
              <ToDoContainer />
          </div>
    </>
  )
}

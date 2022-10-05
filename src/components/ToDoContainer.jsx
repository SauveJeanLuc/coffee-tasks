import React, { useEffect, useState } from "react";
import Nav from "./Nav";
export default function ToDoContainer() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );
  // function addTodo(todo) {
  //   setTodos((state) => [...state, todo]);
  // }
  // function deleteTodo(id) {
  //   setTodos((state) => state.filter((t) => t.id !== id));
  // }
  // function editTodo(id, task) {
  //   const newTodos = todos.map((t) => {
  //     if (t.id === id) t.task = task;
  //     return t;
  //   });
  //   setTodos(newTodos);
  // }
  // function toggleCompletion(id) {
  //   const newTodos = todos.map((t) => {
  //     if (t.id === id) t.completed = !t.completed;
  //     return t;
  //   });
  //   setTodos(newTodos);
  // }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todos?.length) return;
  }, [todos]);
  return (
    <>
      <Nav setTodos={setTodos} />
      <div className="bg-coffeePrimaryLight px-5 py-2.5 text-center rounded-md">
        {!todos?.length ? (
          <span className="text-white font-semibold">No ToDos</span>
        ) : (
          <ul className="text-left">
            {todos?.map((todo) => (
              <>
                <li className="border-b-2 py-3 px-8 ">{todo.title}</li>
              </>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

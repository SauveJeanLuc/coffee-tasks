import React, { useEffect, useState } from 'react';
import Nav from './Nav';

export default function ToDoContainer() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    const initialValue = JSON.parse(savedTodos);
    return initialValue || [];
  });
  function checkedOrNot(todo) {
    if (todo.status === 'complete') {
      return true;
    } else return false
  }
  function checkboxhandler(e) {
    const index = e.target.id;
    var newTodos = [...todos]
    newTodos[index].status = `${todos[index].status === 'complete' ? 'incomplete' : 'complete'}`
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos)
  }
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
    localStorage.setItem('todos', JSON.stringify(todos));
    if (todos?.length) return;
  }, [todos]);
  const [filter, setFilter] = useState("all")
  const filteredList = todos?.map((todo, index) => todo.status === filter ? (
    <li key={todo.id} className="border-b-2 py-3 px-8 flex justify-between">
      <div className="font-semibold">{todo.title}</div>
      <div className='flex space-x-2'>
        <div className="font-light">{todo.status}</div>
        <div> <input type="checkbox"
          className = "accent-[#814b3f] h-5 w-5"
          name="status"
          id={index}
          checked={checkedOrNot(todo)}
          onChange={checkboxhandler} />
        </div>
      </div>
    </li>
  ) : '')
  const allList = todos?.map((todo, index) => (
    <li key={todo.id} className="border-b-2 py-3 px-8 flex justify-between">
      <div className="font-semibold">{todo.title}</div>
      <div className='flex space-x-2'>
        <div className="font-light">{todo.status}</div>
        <div> <input type="checkbox"
          className = "accent-[#814b3f] h-5 w-5"
          name="status"
          id={index}
          checked={checkedOrNot(todo)}
          onChange={checkboxhandler} />
        </div>
      </div>
    </li>
  ))
  return (
    <>
      <Nav setTodos={setTodos} setFilter={setFilter} />
      <div className="bg-coffeePrimaryLight px-5 py-2.5 text-center rounded-md">
        {!todos?.length ? (
          <span className="text-white font-semibold">No ToDos</span>
        ) : (
          <ul className="text-left">
            {filter === "all" ? allList :
              filteredList}
          </ul>
        )}
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import Nav from './Nav';

export default function ToDoContainer() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    const initialValue = JSON.parse(savedTodos);
    return initialValue || [];
  });
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
  const [filter, setFilter] = useState('all');
  const filteredList = todos?.map((todo) =>
    todo.status === filter ? (
      <li key={todo.id} className='border-b-2 py-3 px-8 flex justify-between'>
        <div className='font-semibold'>{todo.title}</div>
        <div className='font-light'>{todo.status}</div>
      </li>
    ) : (
      ''

    ),

  );
  const allList = todos?.map((todo) => (
    <li key={todo.id} className='border-b-2 py-3 px-8 flex justify-between'>
      <div className='font-semibold'>{todo.title}</div>
      <div className='font-light'>{todo.status}</div>
    </li>
  ));
  return (
    <>
      <Nav setTodos={setTodos} setFilter={setFilter} />
      <div className='bg-coffeePrimaryLight px-5 py-2.5 text-center rounded-md'>
        {!todos?.length ? (

          <span className='text-white font-semibold'>
            You have no tasks. Let&#39;s add a task to get started.
          </span>
        ) : (
          <ul className='text-left'>
            {filter === 'all' ? allList : filteredList}
          </ul>

        )}
      </div>
    </>
  );
}

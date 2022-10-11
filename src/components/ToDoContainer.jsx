import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
  function checkedOrNot(todo) {
    if (todo.status === 'complete') {
      return true;
    } else return false;
  }
  function checkboxhandler(e) {
    const index = e.target.id;
    var newTodos = [...todos];
    newTodos[index].status = `${todos[index].status === 'complete' ? 'incomplete' : 'complete'}`;
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  function handleDelete(index) {
    var newTodos = [...todos];
    newTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  function handleEdit(index) {
    console.log(index);
    return;
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    if (todos?.length) return;
  }, [todos]);
  const [filter, setFilter] = useState('all');

  const filteredList = todos?.map((todo, index) =>
    todo.status === filter ? (
      <li
        key={todo.id}
        className='bg-white border-b-2 py-1 px-2 flex  rounded-lg mb-3 ml-auto mr-auto mt-4'
        style={{ width: '40vw' }}
      >
        <input
          type='checkbox'
          className='h-7 w-7 mt-auto mb-auto mr-2 ml-2 rounded-full text-[#4d3434] focus:ring-[#757575]'
          id={index}
          checked={checkedOrNot(todo)}
          onChange={checkboxhandler}
        />
        <div className='text-[#676767] font-bold mr-auto p-2'>{todo.title}</div>
        <div className='p-2 mr-4 cursor-pointer'>
          <FontAwesomeIcon className='w-5 h-5' icon={faTrashCan} />
        </div>
        <div className='p-2 cursor-pointer'>
          <FontAwesomeIcon className='w-5 h-5' icon={faPenToSquare} />
        </div>
      </li>
    ) : (
      ''

    ),

  );

  const allList = todos?.map((todo, index) => (
    <li
      key={todo.id}
      className='bg-white border-b-2 py-1 px-2 flex  rounded-lg mb-3 ml-auto mr-auto mt-4'
      style={{ width: '40vw' }}
    >
      <input
        type='checkbox'
        className='h-7 w-7 mt-auto mb-auto mr-2 ml-2 rounded-full text-[#4d3434] focus:ring-[#757575]'
        id={index}
        checked={checkedOrNot(todo)}
        onChange={checkboxhandler}
      />
      <div className='text-[#676767] font-bold mr-auto p-2'>{todo.title}</div>
      <div className='p-2 mr-4 cursor-pointer'>
        <FontAwesomeIcon
          onClick={() => handleDelete(index)}
          className='w-5 h-5'
          icon={faTrashCan}
        />
      </div>
      <div className='p-2 cursor-pointer'>
        <FontAwesomeIcon
          onClick={() => handleEdit(index)}
          className='w-5 h-5'
          icon={faPenToSquare}
        />
      </div>
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

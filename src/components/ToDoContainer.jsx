import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PopUp from './PopUp';

export default function ToDoContainer() {
  const [popUpvisible, setPopUpvisible] = useState(false);
  const [editPopUp, setEditPopUp] = useState(null);
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
    setPopUpvisible(!popUpvisible);
    setEditPopUp(todos[index]);
    // console.log(editTodo);
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
    <div key={index} className='px-2'>
      <li
        key={todo.id}
        className='bg-white items-center border-b-2 py-0 md:py-2 px-2 md:px-5 flex rounded-lg mb-3 ml-auto mr-auto mt-4'
      >
        <input
          type='checkbox'
          className='h-4 w-4 md:h-7 md:w-7 mt-auto mb-auto mr-2 ml-2 rounded-full text-[#4d3434] focus:ring-[#757575]'
          id={index}
          checked={checkedOrNot(todo)}
          onChange={checkboxhandler}
        />
        <div className='text-[#676767] font-light md:font-bold mr-auto p-2 md:text-sm text-[12px]'>
          {todo.title}
        </div>
        <div className='text-[13.5px] md:text-base cursor-pointer md:space-x-12 space-x-4 justify-items-center flex '>
          <FontAwesomeIcon onClick={() => handleDelete(index)} icon={faTrashCan} />
          <FontAwesomeIcon onClick={() => handleEdit(index)} icon={faPenToSquare} />
        </div>
      </li>
    </div>
  ));
  return (
    <>
      <Nav setTodos={setTodos} setFilter={setFilter} />
      <div className='bg-coffeePrimaryLight py-1 text-center rounded-md md:py-2.5 md:px-2'>
        {!todos?.length ? (
          <span className='text-white font-semibold'>No ToDos</span>
        ) : (
          <ul className='text-left'>{filter === 'all' ? allList : filteredList}</ul>
        )}
      </div>
      {popUpvisible && (
        <PopUp
          visible={popUpvisible}
          trigger={setPopUpvisible}
          setTodos={setTodos}
          todos={todos}
          editTodo={editPopUp}
        />
      )}
    </>
  );
}

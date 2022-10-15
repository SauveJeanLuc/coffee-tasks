import { useEffect, useState } from 'react';
import Nav from './Nav';
import PopUp from './PopUp';
import Todo from './Todo';

export default function ToDoContainer() {
  const [popUpvisible, setPopUpvisible] = useState(false);
  const [editPopUp, setEditPopUp] = useState(null);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    const initialValue = JSON.parse(savedTodos);
    return initialValue || [];
  });

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
    return;
  }

  function closePopUp() {
    setPopUpvisible(false);
    setEditPopUp(null);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    if (todos?.length) return;
  }, [todos]);

  const [filter, setFilter] = useState('all');

  const filteredList = todos?.map((todo, index) =>
    todo.status === filter ? (
      <Todo
        key={index}
        index={index}
        todo={todo}
        checkedOrNot={checkedOrNot}
        checkboxhandler={checkboxhandler}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    ) : (
      ''
    ),
  );

  const allList = todos?.map((todo, index) => (
    <Todo
      key={index}
      index={index}
      todo={todo}
      checkedOrNot={checkedOrNot}
      checkboxhandler={checkboxhandler}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  ));

  return (
    <>
      <Nav setTodos={setTodos} setFilter={setFilter} />
      <div className='bg-coffeePrimaryLight py-1 text-center rounded-md md:py-2.5 md:px-2'>
        {!todos?.length ? (
          <span className='text-white font-semibold'>
            You have no tasks. Let&#39;s add a task to get started.
          </span>
        ) : (
          <ul className='text-left'>{filter === 'all' ? allList : filteredList}</ul>
        )}
      </div>
      {popUpvisible && (
        <PopUp
          visible={popUpvisible}
          trigger={closePopUp}
          setTodos={setTodos}
          todos={todos}
          editTodo={editPopUp}
        />
      )}
    </>
  );
}

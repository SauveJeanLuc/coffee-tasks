import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function ToDoContainer() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    const initialValue = JSON.parse(savedTodos);
    return initialValue || [];
  });
  const [isChecked, setIsChecked] = useState(false);

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

  
  const style1={
   
    width: "2em",
    height: "2em",
    backgroundColor: "white",
    borderRadius: "50%",
    appearance: "none",
    webkitAppearance: "none",
    outline: "none",
    border: "1px solid #611707",
    cursor: "pointer",
    
  }
  const style2={
   
    width: "2em",
    height: "2em",
    
    borderRadius: "50%",
    appearance: "none",
    
    outline: "none",
    border: "1px solid #611707",
    cursor: "pointer",
    
  }
  const [currStyle,setCurrStyle] =useState(style1)
  
  const handleChange = event => {
    if (event.target.checked) {
      setCurrStyle(style2);
     
    } else {
      setCurrStyle(style1);
      
    }
    setIsChecked(current => !current);
  };

  return (
    <>
      <Nav setTodos={setTodos} />
      <div className="bg-coffeePrimaryLight px-5 py-2.5 text-center rounded-md h-100">
        {!todos?.length ? (
          <span className='text-white font-semibold'>No ToDos</span>
        ) : (

          <ul className="text-left">
            {todos?.map(todo => (
              
              
              <li key={todo.id} className="bg-white border-b-2 py-3 px-2 flex  rounded-lg mb-3 ml-auto mr-auto mt-4" style={{"width":"40vw"}}>
             
              <input 
              type="checkbox" 
              className='ml-2 mr-2 mt-1' 
              value={isChecked}
              onChange={handleChange}
              style={currStyle}
              />
      
                <div className="font-semibold mr-auto p-2">{todo.title}</div>
                <div  className='p-2 mr-4 cursor-pointer'>  <FontAwesomeIcon icon={faTrashCan} /></div>
                <div  className='p-2 cursor-pointer'>  <FontAwesomeIcon icon={faPenToSquare} /></div>
              </li>
            
            ))}
          </ul>
          
        )}
      </div>
    </>
  );
}

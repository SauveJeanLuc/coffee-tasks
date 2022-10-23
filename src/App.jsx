import React from 'react';
import Header from './components/Header';
import ToDoContainer from './components/ToDoContainer';
import '../src/dark.css';

function App() {
  const [darkToggle, setDarkToggle] = React.useState(false);
  return (
    <div className={`${darkToggle && 'dark'}`}>
      <div className={`h-[100vh] dark:bg-gray-800`}>
        <Header />
        <div
          className={`w-[95%] flex flex-col m-auto mt-12 bg-white dark:bg-gray-800 rounded-md md:w-[80%] lg:w-1/2`}
        >
          <label className='toggleDarkBtn'>
            <input type='checkbox' onClick={() => setDarkToggle(!darkToggle)} />
            <span className='slideBtnTg round'></span>
          </label>
          <ToDoContainer />
        </div>
      </div>
    </div>
  );
}

export default App;

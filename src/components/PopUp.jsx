import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SelectButton from './atomic/SelectButton';
import Input from './atomic/Input';
import Button from './atomic/Button';
import multiply from '../assets/multiply.svg';
import { v4 as uuid } from 'uuid';

const options = [
  { value: 'complete', label: 'Complete' },
  { value: 'incomplete', label: 'Incomplete' },
];
export default function PopUp({ trigger, setTodos, visible }) {
  const [status, setStatus] = useState('incomplete');
  const [currentTask, setCurrentTask] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleClosePupUp = () => {
    setError(null);
    trigger(false);
  };
  const defaultState = () => {
    setCurrentTask('');
    setError(null);
    trigger(false);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (currentTask === '') setError('Please enter the title!');
    else {
      const newTodo = {
        title: currentTask,
        status: status.value ? status.value : status,
        id: uuid(),
      };
      setTodos((state) => [...state, newTodo]);
      defaultState();
    }
  };

  return (
    <div
      style={{ zIndex: 9 }}
      className={`${
        visible ? `scale-100` : `scale-0`
      } flex absolute inset-0 w-full h-full bg-black/50 flex-col justify-center items-center z-[9999]`}
    >
      <div className={'w-4/5 max-w-sm'}>
        <div className='w-[10%] bg-coffeePrimaryLight mb-2 flex justify-center ml-auto cursor-pointer'>
          <img onClick={handleClosePupUp} src={multiply} alt='Close' />
        </div>
        <div className='bg-coffeePrimaryLight rounded-md p-8 px-6 md:px-9'>
          <h2 className='font-extrabold text-lg mb-2'>New Task</h2>

          {error && (
            <div
              id='alert-border-2'
              className='flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200'
              role='alert'
            >
              <svg
                className='flex-shrink-0 w-5 h-5 text-red-700'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <div className='ml-3 text-sm font-medium text-red-700'>
                {error}
              </div>
              <button
                type='button'
                className='ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8'
                data-dismiss-target='#alert-border-2'
                aria-label='Close'
                onClick={() => setError(null)}
              >
                <span className='sr-only'>Dismiss</span>
                <img src={multiply}></img>
              </button>
            </div>
          )}

          <div className='flex flex-col pb-8'>
            <label htmlFor=''>Title</label>
            <Input onChangeHandler={handleInputChange} value={currentTask} />
            <label htmlFor=''>Status</label>
            <SelectButton
              width='100%'
              onChange={(newValue) => setStatus(newValue)}
              options={options}
              defaultValue={{ value: 'incomplete', label: 'Incomplete' }}
            />
          </div>
          <div className='flex justify-between md:justify-start mt-2'>
            <Button
              clickHandler={addTask}
              title={'Add Task'}
              className='md:mr-9'
            />
            <Button
              clickHandler={handleClosePupUp}
              title={'Cancel'}
              isColorFlipped={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  trigger: PropTypes.func,
  visible: PropTypes.bool,
  setTodos: PropTypes.func,
};

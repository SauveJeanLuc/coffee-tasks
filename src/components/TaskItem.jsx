
import React from 'react';
import PropTypes from 'prop-types';


export const TaskItem = ({ task }) => {
  return (
    <div className="flex flex-col text-white font-semibold bg-coffeeDark px-5 py-2.5 text-center rounded-md ">
      <div className="w-100 flex justify-between">
        <span>{task.title}</span>
        <div className={`bg-slate-400 px-1 rounded-md`}>
          <span>{task.status}</span>
        </div>
        <div>
          <button className='bg-red-500 px-3 rounded-sm cursor-pointer'>X</button>
          <button className='bg-green-500 px-3 rounded-sm cursor-pointer ml-1'>✓</button>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object
}


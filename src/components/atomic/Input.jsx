import React from 'react'

export default function Input({onChangeHandler}) {
  return (
    <div className='w-full'>
        <input onChange={onChangeHandler} type="text" className='border rounded-[5px] w-full mb-[10px] py-[10px] px-0 border-[#611707]' placeholder="Add a new task" />
    </div>
  )
}

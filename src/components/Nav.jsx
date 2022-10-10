import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from './atomic/Button';
import SelectButton from './atomic/SelectButton';
import PopUp from './PopUp';

const options = [
  { value: 'complete', label: 'Complete' },
  { value: 'incomplete', label: 'Incomplete' },
];
export default function Nav({ setTodos }) {
  const [popUpvisible, setPopUpvisible] = useState(false);

  const handlePopUpOpen = () => {
    setPopUpvisible(true);
  };

  return (
    <div className="flex justify-between py-2.5 border-b-2 ">
      <PopUp visible={popUpvisible} trigger={setPopUpvisible} setTodos={setTodos} />
      <div className="w-[100%] flex justify-between align-middle">
        <Button
          clickHandler={handlePopUpOpen}
          className="mt-[2px] md:text-[15px] sm:text-[12px] lg:text-[18px] px-2 py-2"
          title="+ Add task" 
        />
        <SelectButton className="w-[90px] sm:w-[155px]" options={options} />
      </div>
    </div>
  );
}

Nav.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

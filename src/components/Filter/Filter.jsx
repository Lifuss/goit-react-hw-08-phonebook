import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/phoneBook/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="flex justify-between mb-6">
      <h2 className="text-2xl">Contacts</h2>
      <div className="flex items-center gap-1">
        <FaMagnifyingGlass />
        <input onChange={handleInput} type="text" />
      </div>
    </div>
  );
};

export default Filter;

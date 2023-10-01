import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectItems } from 'redux/phoneBook/selectors';
import getFilteredData from 'Helpers/getFilteredData';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/phoneBook/operations';
import Modal from 'components/Modal/Modal';

const ContactList = () => {
  const items = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <ul className="flex flex-col gap-6">
      {getFilteredData(items, filter)?.map(el => (
        <li
          key={el.id}
          className="flex text-xl items-center justify-between border-b-2 border-gray-500"
        >
          {el.name} : {el.number}
          <div className="flex gap-3">
            <button
              className="btn"
              onClick={() => document.getElementById(el.id).showModal()}
            >
              edit
            </button>
            <button className="btn" onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </div>
          <Modal id={el.id} name={el.name} number={el.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

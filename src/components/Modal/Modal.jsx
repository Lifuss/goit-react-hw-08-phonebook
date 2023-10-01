import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateThunk } from 'redux/phoneBook/operations';

const Modal = ({ name, number, id }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = (data, id) => {
    const updateUser = {
      user: { ...data },
      id,
    };
    dispatch(updateThunk(updateUser));
  };
  return (
    <dialog id={id} className="modal">
      <div className="modal-box flex flex-col justify-center items-center">
        <h2>Oops.. technical problem</h2>
        <p>(сервер повертає 500)</p>
        <form className="w-80 flex gap-2 flex-col">
          <label className="input-group input-group-vertical">
            <span>Name</span>
            <input
              {...register('name', { required: true })}
              type="name"
              value={name}
              className="input input-bordered"
            />
          </label>
          <label className="input-group input-group-vertical">
            <span>Number</span>
            <input
              {...register('number', { required: true })}
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              value={number}
              className="input input-bordered"
            />
          </label>
          <button
            disabled
            className="btn btn-neutral"
            onClick={handleSubmit(submit)}
          >
            edit
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;

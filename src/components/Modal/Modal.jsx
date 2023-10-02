import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateThunk } from 'redux/phoneBook/operations';

const Modal = ({ name, number, id }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      number,
    },
  });

  const dispatch = useDispatch();
  const ref = useRef(null);

  const submit = data => {
    const updateUser = {
      user: { ...data },
      id,
    };
    dispatch(updateThunk(updateUser));
    ref.current.click();
  };

  return (
    <dialog id={id} className="modal">
      <div className="modal-box flex flex-col justify-center items-center">
        <form className="w-80 flex gap-2 flex-col">
          <label className="input-group input-group-vertical">
            <span>Name</span>
            <input
              {...register('name', { required: true })}
              type="name"
              className="input input-bordered"
            />
          </label>
          <label className="input-group input-group-vertical">
            <span>Number</span>
            <input
              {...register('number', { required: true })}
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              className="input input-bordered"
            />
          </label>
          <button className="btn btn-neutral" onClick={handleSubmit(submit)}>
            edit
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button ref={ref}>close</button>
      </form>
    </dialog>
  );
};

export default Modal;

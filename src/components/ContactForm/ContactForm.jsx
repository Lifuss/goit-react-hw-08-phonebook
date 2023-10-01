import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/phoneBook/selectors';
import { addContactThunk } from 'redux/phoneBook/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    if (contacts.find(user => user.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    const contact = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContactThunk(contact));
    e.target.reset();
  };

  return (
    <>
      <h1 className=" text-2xl mb-2">New contact</h1>
      <form
        className="flex flex-col w-full gap-4 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-2">
          Name
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="name"
            pattern="[A-z]{2,9} [A-z]{2,9}"
            title="latin chars, 
          format:Name Surname"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          Number
          <input
            className="input input-bordered w-full max-w-xs"
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            title="123-45-67"
            required
          />
        </label>

        <button className="btn max-w-xs">Add contacts</button>
      </form>
    </>
  );
};

export default ContactForm;

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Home = () => {
  return (
    <div className="flex gap-8 p-8">
      <div className="w-1/4 flex flex-col justify-start items-center">
        <ContactForm />
      </div>

      <div className="w-3/4">
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Home;

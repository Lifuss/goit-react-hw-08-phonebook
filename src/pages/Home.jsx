import { StyledDiv } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Home = () => {
  return (
    <StyledDiv>
      <h1>Phone book</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledDiv>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { Container } from './app.styled';
import { ContactsForm } from './Form';
import { ContactsList } from './Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactsForm />
      <ContactsList />
      {error && <h1>Error</h1>}
    </Container>
  );
};

import React from 'react';
import { Item, Title, Button } from './eachContact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsOperations';

export const EachContact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Title>
        {contact.name}: {contact.number}
      </Title>
      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </Item>
  );
};

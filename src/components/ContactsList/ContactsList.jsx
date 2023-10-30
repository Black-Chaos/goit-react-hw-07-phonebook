import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from '.';
import { ListByContacts } from './ContactsList.styled';

export function ContactsList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch();

    const filteredContacts = () => {
      if (filter) {
        return contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter)
        );
      } else {
        return contacts;
      }
    };
  
  return (
    <ListByContacts>
      {filteredContacts().map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          handleDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ListByContacts>
  );
}

import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const newName = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(newName);
  });

  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map(contact => (
          <li className={s.wrapper} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;

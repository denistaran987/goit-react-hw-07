import './App.css';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectLoading } from '../redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading ...</p>}
      {!loading && !error && contacts.length === 0 && (
        <p style={{ color: 'red' }}>Sorry, no contacts in Phonebook, please add contact.</p>
      )}
      <ContactList />
    </div>
  );
}

export default App;

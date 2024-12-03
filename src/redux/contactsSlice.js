import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, actions) => {
      state.items.push(actions.payload);
    },
    deleteContact: (state, actions) => {
      state.items = state.items.filter(item => item.id !== actions.payload);
    },
  },
});

export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

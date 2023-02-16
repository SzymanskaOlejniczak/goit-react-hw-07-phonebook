import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =  'https://63e4d3d0c04baebbcdace217.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      } 
    }
  );
  export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async (newContact, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', newContact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const deleteContacts = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
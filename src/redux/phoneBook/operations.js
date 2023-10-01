import { contactApi } from 'redux/user/operations';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchContactsThunk = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await contactApi.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (body, thunkAPI) => {
    try {
      await contactApi.post('/contacts', body);
      thunkAPI.dispatch(fetchContactsThunk());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      await contactApi.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContactsThunk());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateThunk = createAsyncThunk(
  'updateUser',
  async (body, thunkAPI) => {
    try {
      await contactApi.patch(`/contacts/${body.id}`, body.user);
      thunkAPI.dispatch(fetchContactsThunk());
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

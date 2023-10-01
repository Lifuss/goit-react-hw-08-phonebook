import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const contactApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  contactApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  contactApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await contactApi.post('/users/signup', body);
      setToken(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await contactApi.post('/users/login', body);
      setToken(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactApi.post('/users/logout');
      clearToken();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

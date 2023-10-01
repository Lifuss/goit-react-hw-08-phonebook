import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBook/slice';
import { userReducer } from './user/slice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    user: userReducer,
  },
});

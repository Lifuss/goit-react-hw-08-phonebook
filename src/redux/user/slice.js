const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { registerThunk, loginThunk, logoutThunk } = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, payload) => {
        return (state = initialState);
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLogin = true;
        }
      );
  },
});

export const userReducer = slice.reducer;

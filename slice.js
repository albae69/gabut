import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: true,
  cart: null,
  data: null,
  user: null,
  token: null,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const {login, logout} = slice.actions;

export default slice.reducer;

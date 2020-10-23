import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
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
  },
});

export const {login} = slice.actions;

export default slice.reducer;

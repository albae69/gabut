import {createSlice} from '@reduxjs/toolkit';

const Cart = {
  cart: null,
};

const cart = createSlice({
  name: 'cart',
  initialState: Cart,
  reducers: {},
});

// export const {} = cart.actions;

export default cart.reducer;

import {configureStore} from '@reduxjs/toolkit';
import auth from './authSlice';
import cart from './cartSlice';
import items from './itemsSlice';

const store = configureStore({
  reducer: {
    auth: auth,
    cart: cart,
    items: items,
  },
});
export default store;

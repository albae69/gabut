import {configureStore} from '@reduxjs/toolkit';

import Slice from './slice';

const store = configureStore({
  reducer: Slice,
});

export default store;

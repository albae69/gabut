import {createSlice} from '@reduxjs/toolkit';

import data from './data.json';

const Items = data.item;

const items = createSlice({
  name: 'items',
  initialState: Items,
  reducers: {},
});

// export const {} = items.actions;

export default items.reducer;

import {createSlice} from '@reduxjs/toolkit';

const Items = {
  items: null,
};

const items = createSlice({
  name: 'items',
  initialState: Items,
  reducers: {},
});

// export const {} = items.actions;

export default items.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const Slice = createSlice({
  name: 'valores',
  initialState: {
    nombre: 'TEST',
  },
  reducers: {
    guardarnombre: (state, action) => {
      state.nombre = action.payload;
    },
  },
});

export const { guardarnombre } = Slice.actions;

import { createSlice } from '@reduxjs/toolkit';
import data from './data.json';

const grilleReducer = createSlice({
  name: 'grille',
  initialState: {
    grilleData: data
  },
  reducers: {
    getGrille: (state, action) => {
        state.grilleData = action.payload
    },
  }
});

export default grilleReducer.reducer;
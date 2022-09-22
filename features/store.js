import { configureStore } from '@reduxjs/toolkit';
import grilleReducer from './grille/grilleSlice.js';

const store = configureStore({
  reducer: {
    grille: grilleReducer,
  },
  devTools: true,
});

export default store;
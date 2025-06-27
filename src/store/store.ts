import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer, { FAV_PERSISTENT_STATE } from './favorites.slice';
import { saveState } from './storage';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer
  }
});

store.subscribe(() => {
  saveState({ favorites: store.getState().favorites }, FAV_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

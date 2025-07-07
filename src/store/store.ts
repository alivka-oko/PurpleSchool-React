import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites.slice';
import userReducer from './user.slice';
import { saveState } from './storage';
import { FAV_PERSISTENT_STATE, USER_PERSISTENT_STATE } from '../helpers/persistentState';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    users: userReducer
  }
});

store.subscribe(() => {
  saveState({ favorites: store.getState().favorites }, FAV_PERSISTENT_STATE);
  saveState({ users: store.getState().users }, USER_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

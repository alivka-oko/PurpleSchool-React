import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/IUser';
import { loadState } from './storage';

export const USER_PERSISTENT_STATE = 'user';

interface UserInitialState {
  activeUser: IUser | null;
  users: IUser[];
}

interface UserLocalStorageState {
  users: UserInitialState;
}

const initialState: UserInitialState = {
  activeUser:
    loadState<UserLocalStorageState>(USER_PERSISTENT_STATE)?.users.activeUser ??
    null,
  users:
    loadState<UserLocalStorageState>(USER_PERSISTENT_STATE)?.users.users ?? []
};

const lastId = (users: IUser[]): number => {
  if (users.length === 0) {
    return 0;
  }
  return Math.max(...users.map((e) => e.id));
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const isExist = state.users.find((user) => user.name === action.payload);
      if (!isExist) {
        const newUser = {
          id: lastId(state.users) + 1,
          name: action.payload
        };
        state.users.push(newUser);
        state.activeUser = newUser;
        return;
      }
      state.activeUser = isExist;
    },
    logout: (state) => {
      state.activeUser = null;
    }
  }
});

export default UserSlice.reducer;
export const UserActions = UserSlice.actions;

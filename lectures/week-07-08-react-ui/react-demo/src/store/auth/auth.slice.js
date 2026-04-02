import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  profile: '',
  isManager: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    login: (_, action) => {
      const { payload } = action;
      return {
        profile: 'profile',
        isManager: payload.isManager,
      };
    },
    logout: () => {
      return {
        profile: '',
        isManager: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

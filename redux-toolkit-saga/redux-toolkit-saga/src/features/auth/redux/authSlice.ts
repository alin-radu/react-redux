import { Auth_Form } from './../types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  user: null | string;
  loading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: (state, action: PayloadAction<Auth_Form>) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action: PayloadAction<string>) => {
      console.log('%c-> developmentConsole: action--------> ', 'color:#77dcfd', action);
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    authError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logoutStart: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    logoutError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authError,
  logoutStart,
  logoutSuccess,
  logoutError,
} = authSlice.actions;

export const authReducer = authSlice.reducer;

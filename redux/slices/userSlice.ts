import { createSlice } from '@reduxjs/toolkit';

type UserSliceState = {
  PhotoStorageKey: string | null;
  BannerImage: string | null;
  Role: number;
  Name: string | null;
  Email: string | null;
  Description: string | null;
  Ticket: string | null;
  Wallet: string | null;
};

const initialState: UserSliceState = {
  PhotoStorageKey: null,
  BannerImage: null,
  Role: 0,
  Name: 'Unnamed',
  Email: '',
  Description: '',
  Wallet: null,
  Ticket: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action) => {
      if (action.payload) {
        state = { ...state, ...action.payload };
      } else {
        state = { ...initialState };
      }
      localStorage.setItem('wallet.connected', JSON.stringify(state.Wallet !== null));
      localStorage.setItem('wallet', JSON.stringify(state.Wallet));
      localStorage.setItem('ticket', JSON.stringify(state.Ticket));
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;

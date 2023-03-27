import { createSlice } from '@reduxjs/toolkit';

type AppStatusType = {
  appLoading: boolean;
  appProgress: number | null;
  pendingModal: {
    currentStep: number;
    steps: Array<string> | null;
  };
};

const initialState: AppStatusType = {
  appLoading: false,
  appProgress: null,
  pendingModal: {
    currentStep: 1,
    steps: null,
  },
};

export const appStatusSlice = createSlice({
  name: 'appStatus',
  initialState: initialState,
  reducers: {
    setPendingModal: (state, action) => {
      state.pendingModal = { ...state.pendingModal, ...action.payload };
    },
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
    setAppProgress: (state, action) => {
      state.appProgress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPendingModal, setAppLoading, setAppProgress } = appStatusSlice.actions;

export default appStatusSlice.reducer;

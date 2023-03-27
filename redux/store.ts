import { configureStore } from '@reduxjs/toolkit';
import appStatusReducer from './slices/appStatusSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    appStatus: appStatusReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

(window as any).appStore = store;

export default store;

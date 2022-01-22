import {configureStore} from '@reduxjs/toolkit';
import listReducer from './List/ListSlice';

export const store = configureStore({
  reducer: {
    counter: listReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

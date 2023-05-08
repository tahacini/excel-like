import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/table/tableSlice';
import headerReducer from './features/header/headerSlice';

export const store = configureStore({
  reducer: {
    table: tableReducer,
    header: headerReducer,
  },
});

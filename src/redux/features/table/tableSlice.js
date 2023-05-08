import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { handleChange } from './../../../utils/utils';

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    // const response = await fetchCount(amount);
    // return response.data;
  }
);

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    changeData: (state, action) => {
      return handleChange(
        state,
        action.payload.newValue,
        action.payload.selectedItem,
        action.payload.index
      );
    },
    deleteRow: (state, action) => {
      return state.filter((_, rowIndex) => rowIndex !== action.payload);
    },
    addRow: (state, action) => {
      const productName = action.payload;
      return [
        ...state,
        {
          productName,
          unitEx: undefined,
          discount: undefined,
          afterDiscount: undefined,
          amount: undefined,
          purchasePrice: undefined,
          margin: undefined,
          vat: undefined,
          totalEx: undefined,
          total: undefined,
        },
      ];
    },
  },
});

export const { changeData, deleteRow, addRow } = tableSlice.actions;
export const selectTableData = (state) => state.table;
export const tableLenght = (state) => state.table.length;

export default tableSlice.reducer;

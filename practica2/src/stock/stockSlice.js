import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStock } from './stockAPI';

const initialState = {
    stock: [],
    loading: false,
}

export const stockAsync = createAsyncThunk(
    'stock/fetchStock',
    async (item) => {
        const response = await fetchStock(item);
        return response.item;
    }
);

export const stockSlice = createSlice({
    name: 'stockState',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.stock.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.stock.findIndex(item => item.sku === action.payload.sku);
            state.stock.splice(index, 1)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(stockAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(stockAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.stock.push(action.payload);
            });
    },
});

export const { addItem, removeItem } = stockSlice.actions;

export const selectStock = (state) => state.stockState.stock;

export const selectLoading = (state) => state.stockState.loading;

export default stockSlice.reducer;
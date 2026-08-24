import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.findIndex(item => item.sku === action.payload.sku);
            state.splice(index, 1);
        }
    }
});

export const { addItem, removeItem } = stockSlice.actions;

export const selectStock = (state) => state.stock;

export default stockSlice.reducer;
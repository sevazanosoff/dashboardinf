import { createSlice } from '@reduxjs/toolkit';

export const comparisonSlice = createSlice({
    name: 'comparison',
    initialState: {
        product1: '',
        product2: '',
    },
    reducers: {
        setComparisonProducts: (state, action) => {
            const { product1, product2 } = action.payload;
            state.product1 = product1;
            state.product2 = product2;
        },
    },
});

export const { setComparisonProducts } = comparisonSlice.actions;

export default comparisonSlice.reducer;
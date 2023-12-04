import { createSlice } from '@reduxjs/toolkit';

export const salesDataSlice = createSlice({
    name: 'salesData',
    initialState: {
        data: [],
    },
    reducers: {
        setSalesData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setSalesData } = salesDataSlice.actions;

export default salesDataSlice.reducer;
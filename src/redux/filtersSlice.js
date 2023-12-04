import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        categoryFilter: '',
    },
    reducers: {
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
        },
    },
});

export const { setCategoryFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
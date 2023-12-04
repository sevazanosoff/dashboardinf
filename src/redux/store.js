import { configureStore } from '@reduxjs/toolkit';
import salesDataReducer from './salesDataSlice';
import filtersReducer from './filtersSlice';
import comparisonReducer from './comparisonSlice';

export const store = configureStore({
    reducer: {
        salesData: salesDataReducer,
        filters: filtersReducer,
        comparison: comparisonReducer,
    },
});

export default store;
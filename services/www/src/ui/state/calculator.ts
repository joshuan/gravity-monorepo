import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
    x: number;
    y: number;
    result: number;
}

const initialState: CounterState = {
    x: 0,
    y: 0,
    result: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        calculate: (state, action: PayloadAction<{x: number; y: number}>) => {
            return {
                x: action.payload.x,
                y: action.payload.y,
                result: action.payload.x + action.payload.y,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const {calculate} = counterSlice.actions;

export default counterSlice.reducer;

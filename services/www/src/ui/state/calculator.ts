import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
    a: number;
    b: number;
}

const initialState: CounterState = {
    a: 0,
    b: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setA: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                a: action.payload,
            };
        },
        setB: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                b: action.payload,
            };
        },
    },
});

export const {setA, setB} = counterSlice.actions;

export default counterSlice.reducer;

import {configureStore} from '@reduxjs/toolkit';

import {calculatorApi} from './api';
import calculateReducer from './calculator';

export const store = configureStore({
    reducer: {
        [calculatorApi.reducerPath]: calculatorApi.reducer,
        calculator: calculateReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(calculatorApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

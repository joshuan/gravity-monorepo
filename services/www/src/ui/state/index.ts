import {configureStore} from '@reduxjs/toolkit';

import calculateReducer from './calculator';

export const store = configureStore({
    reducer: {
        calculator: calculateReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

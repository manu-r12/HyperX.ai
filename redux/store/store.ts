import { configureStore } from '@reduxjs/toolkit';
import { CodeSessionReducer } from '../slices/CodeSession';

export const store = configureStore({
    reducer: {
        codeSession: CodeSessionReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
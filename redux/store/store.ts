import { configureStore } from '@reduxjs/toolkit';
import { codeSessionReducer } from '../slices/CodeSession';

export const store = () =>{ 
    return configureStore({
    reducer: {
        codeSession: codeSessionReducer
    }
})
}


export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
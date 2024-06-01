import { configureStore } from '@reduxjs/toolkit';
import { newProjectReducer } from '../slices/CodeSession';

export const store = () =>{ 
    return configureStore({
    reducer: {
        newProject: newProjectReducer
    }
})
}


export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
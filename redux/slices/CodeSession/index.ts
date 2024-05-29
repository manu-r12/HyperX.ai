import { Workspace } from './../../../types/Workspace';
import { CodeSession } from '@/types/CodeSession';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CodeSessionItem {
    codeSession: CodeSession | null
}

const initialState: CodeSessionItem = {
   codeSession: null
}


const CodeSessionSlice = createSlice({
    name: "codeSession",
    initialState,
    reducers: {
        createCodeSession : (state, action: PayloadAction<CodeSessionItem>) => {
            state = action.payload
            console.log("The State for createCodeSession =>", state)
        }
    }
})


export const {createCodeSession} = CodeSessionSlice.actions;
export const CodeSessionReducer =  CodeSessionSlice.reducer
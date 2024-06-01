import { NewProject } from '@/types/NewProject';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface NewProjectItem {
    newProject: NewProject | null
}

const initialState: NewProjectItem = {
    newProject: null
}

const NewProjectSlice = createSlice({
    name: "newProject",
    initialState,
    reducers: {
        createNewProject : (state, action: PayloadAction<NewProject>) => {
            state.newProject = action.payload
            console.log("The State for createCodeSession =>", state.newProject)
        }
    }
})



export const { createNewProject } = NewProjectSlice.actions;
export const newProjectReducer =  NewProjectSlice.reducer
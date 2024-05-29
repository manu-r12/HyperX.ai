import { Files } from "./File";
import { Workspace } from "./Workspace";


// for reduc store for state persistant ✅

// this is how it is gonna work
// 

export interface CodeSession {
    workspace: Workspace | null
    files: Files
}
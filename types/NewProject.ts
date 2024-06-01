import { Files } from "./File";
import { Workspace } from "./Workspace";


export interface NewProject {
    workspace: Workspace | null
    files: Files
}
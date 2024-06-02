import { getUuid } from "@/hooks/getUuid"
import { NewProject } from "@/types/NewProject"


export const initNewProject = 
( fullFileName: string, workspaceName: string ) : NewProject => 
{

    //  INITIATING THE FIRST FILE 
      const file = {
        fileName: fullFileName,
        fileId: getUuid(),
        code: ""
      }
   // Adding the first initiated files to 'files' array in Files Object
      const files  = {
        files: [file],
        uid: getUuid(),
      }
   // Adding the files ref (as a pointer) in workspace object
      const workspace  = {
        name: workspaceName,
        id: getUuid(),
        fileRef: files.uid

      }

      return { files, workspace }
    }
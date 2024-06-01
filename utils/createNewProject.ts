import { getUuid } from "@/hooks/getUuid"
import { NewProject } from "@/types/NewProject"
import { Files } from "@/types/File"
import { Workspace } from "@/types/Workspace"
import { NewProjectItem } from "@/redux/slices/CodeSession"

export const initNewProject = (full_fileName: string, workspaceName: string): NewProject =>{

    const file = {
        fileName: full_fileName,
        fileId: getUuid(),
        code: ""
      }

      const files: Files = {
        files: [file],
        uid: getUuid(),
      }

      const workspace: Workspace = {
        name: workspaceName,
        id: getUuid(),
        fileRef: files.uid

      }

      const newProject: NewProject = {files, workspace}

      return newProject
}
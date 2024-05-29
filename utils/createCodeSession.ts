import { getUuid } from "@/hooks/getUuid"
import { CodeSession } from "@/types/CodeSession"
import { Files } from "@/types/File"
import { Workspace } from "@/types/Workspace"

export const initCodeSession = (full_fileName: string, workspaceName: string): CodeSession =>{

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

      const codeSession: CodeSession = {files, workspace}

      return codeSession
}

// this is gonna used aa fi;e ref for workspace 
export interface File {
    fileName: string
    fileId: string
    code: string 
}


export interface Files {
    files: File[]
    uid: string
}


export const SelectedFile: File | null = null
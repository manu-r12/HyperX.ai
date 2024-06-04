"use client"

import React, { useState } from 'react'
import styles from './CodeEditor.module.scss'
import Image from 'next/image'
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';

import Editor from '../CodeMirror/CodeMirror';
import { LanguagesIcons } from '@/utils/langIcons';
import { useSelector } from 'react-redux';
import { selectNewProject } from '@/redux/selectors/selectCodeSession';
import { File , SelectedFile} from '@/types/File';
import { Workspace } from '@/types/Workspace';




const CodeEditor = () => {

  const [currentState, setCurrentState] = useState(" ")
  const [selectedFile, setSelectedFile] = useState< File | null >(null)

  const [selectedWorkspace, setSelectedWorkspacfe] = useState< Workspace | null >(null)
 

  const router = useRouter()  

  const newProject = useSelector(selectNewProject)


  console.log("Here is the data of new project =", newProject)

  const codeFiles = newProject?.files.files
  const workspace = newProject?.workspace

  const changeSelectedFile = (file: File) =>{
    setSelectedFile(file)
    console.log("Selected File changed to ->", selectedFile)

  }
  return (
    <div className={styles.container}>
        <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                    <Image alt='hyper-x-log' fill src={"/icons/hyperxLogo.png"}/>
                </div>
                <h1 onClick={() => console.log("Data,")}>HyperX.ai</h1>
            </div>
            <div className='flex items-center gap-5'>
                <div 
                onClick={
                    () => router.push("/")
                }
                >
                    <p className='flex items-center gap-2 cursor-pointer'><FaHome/>Home</p>
                </div>
                <div>
                    <p className='flex items-center gap-2 cursor-pointer'><FaRegUser/> Manu R</p>
                </div>
            </div> 
        </div>
        <div className={styles.middleContainer}>
            <div className={styles.sideBar}>
                <div className={styles.siderBarExplorer}>

                    <p className='flex items-center gap-2'>File Explorer</p>
                </div>
                <div className='flex items-center justify-center'>
                    <p className={styles.createNewFileButton}><FaPlusCircle size={15}/> New File</p>
                </div>

                {/* Files shown here  */}
                <div className={styles.filesShowContainer}>
                    <div className={styles.filesContainer}>
                        <div className='flex items-center gap-2'>
                          <LanguagesIcons.Python size={19}/>
                          {!codeFiles && <p>Loading...</p>}
                          {codeFiles?.map((file, i) => {
                            return <p key={i}>{file.fileName}</p>
                          }) }
                        </div>
                    </div>

                </div>
            </div>
            {/* Code Editor Block */}
            <div className={styles.codeEditor}>
                <div className={styles.layoutControls}>
                    <div className='items-center gap-2'>
                            <LanguagesIcons.Python size={19}/>
                            {codeFiles?.map((file, i) => {
                            return (
                            <p 
                            onClick={() => changeSelectedFile(file)}
                            key={i}>{file.fileName}</p>
                            )
                            })}
                    </div>
                </div>
                <Editor/>
            </div>
        </div>
   
    </div>
  )
}

export default CodeEditor
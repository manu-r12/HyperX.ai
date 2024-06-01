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


const CodeEditor = () => {

  const [ currentState, setCurrentState ] = useState(" ")
  const router = useRouter()  

  const newProject = useSelector(selectNewProject)

// NAME TO BE CHANGED 
// CODESESSION OR SELECTCODESESSION TO => NEWPROJECT

  console.log("Here is the code session =>", newProject)


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
                    {/* <p className='flex items-center gap-2'>File Explorer <CiFileOn/></p>/ */}
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
                          <p>database.py</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Code Editor Block */}
            <div className={styles.codeEditor}>
                <div className={styles.layoutControls}>
                    <div className='items-center gap-2'>
                            <LanguagesIcons.Python size={19}/>
                            <p>database.py</p>
                    </div>
                </div>
                <Editor/>
            </div>
        </div>
   
    </div>
  )
}

export default CodeEditor
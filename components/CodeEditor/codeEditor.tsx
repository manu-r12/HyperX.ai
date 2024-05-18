import React from 'react'
import styles from './CodeEditor.module.scss'
import Image from 'next/image'
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";




const CodeEditor = () => {
  return (
    <div className={styles.container}>
        <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                    <Image alt='hyper-x-log' fill src={"/icons/hyperxLogo.png"}/>
                </div>
                <h1>HyperX.ai</h1>
            </div>
            <div className='flex items-center gap-5'>
                <div>
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
            </div>
        </div>
   
    </div>
  )
}

export default CodeEditor
"use client"
import React, { useState } from 'react'
import styles from './NewProjectSetupForm.module.scss'
import { useRouter } from 'next/navigation';
import { initCodeSession } from '@/utils/createCodeSession';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store/store';
import { createCodeSession } from '@/redux/slices/CodeSession';


const NewProjectSetupForm = () => {

    const [fileName, setFileName] = useState('');
    const [fileType, setFileType] = useState('');
    const [workspaceName, setWorkspaceName] = useState('')

    // reset all the states 
    function resetState(){
      setFileName(" "); setWorkspaceName(" "); setFileType(" ");
    }

    const dispatch = useDispatch<AppDispatch>();
  
    const handleSubmit = (e: any) => {
      e.preventDefault();

      // fullname for example -> server + py would be "server.py"
      const fullFilename = fileName + "." + fileType;

      const codeSession = initCodeSession(fullFilename, workspaceName);
      dispatch(createCodeSession({codeSession}));
      resetState();
      
    };
  
    
  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} 
          className={styles.formContainer}>
      <div className={styles.inputDiv}>
        <label htmlFor="workspace">Workspace Name</label>
        <input
          placeholder='My Workspace'
          type="text"
          id="workspace"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="fileName">File Name</label>
        <input
          placeholder='example: server'
          type="text"
          id="fileName"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="fileType">File Type</label>
        <select
          defaultValue={"py"}
          id="fileType"
          value={fileType}
          onChange={(e) => setFileType(e.target.value)}
          required
        >
          <option value="">Select a file type</option>
          <option value="py">Python (.py)</option>
          <option value="js">JavaScript (.js)</option>
          <option value="html">HTML (.html)</option>
          <option value="css">CSS (.css)</option>
        </select>
      </div>
      <div className='w-full flex items-center justify-center mt-4'>
        <button 
        style={{background: "#0FC06B"}}
        className='text-black pr-4 pl-4 pt-2 pb-2 tracking-wider rounded-lg'
        type="submit">
            Create 🚀
        </button>
      </div>    
    </form>
    </div>
  )
}

export default NewProjectSetupForm
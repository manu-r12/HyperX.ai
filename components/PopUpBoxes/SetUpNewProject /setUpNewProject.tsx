
import React from 'react'
import styles from './SetUpNewProject.module.scss'
import NewProjectSetupForm from '@/components/Forms/NewProjectSetUp/newProjectSetupForm'

const SetUpNewProject = () => {

    
  return (
    <div className={styles.container}>
        
        <div className={styles.heading}>
            <h1>Create a new file ✨</h1>
        </div>

        <div className={styles.middleContainer}>
            <NewProjectSetupForm />
        </div>  
      
    </div>
  )
}

export default SetUpNewProject
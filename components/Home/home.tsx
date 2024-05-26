'use client'
import React, { use, useEffect, useState } from 'react'
import styles from './Home.module.scss'
import Image from 'next/image'
import { TiPlusOutline } from "react-icons/ti";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import SignOutButton from '../Buttons/SignOutButton/SignOutButton';
import { UserSession } from '@/types/UserSession';
import SetUpNewProject from '../PopUpBoxes/SetUpNewProject /setUpNewProject';



interface HomePageProps {
    userSession?: UserSession;
}

const HomePage: React.FC<HomePageProps> =  (userSession) => {

  const [isNewProjectSetUpPopBoxOpen, setNewProjectSetUpPopBoxOpen] = useState<boolean>(false)


  return (
    <div className={styles.container}>
        <div className='flex items-center justify-between mt-[60px] pl-[70px] pr-[70px] w-full'>
            <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                    <Image alt='hyper-x-log' fill src={"/icons/hyperxLogo.png"}/>
                </div>
                <h1>HyperX.ai</h1>
            </div>
            <div className='flex items-center gap-2 tracking-widest cursor-pointer hover:scale-[1.1]'>
                <p>Github</p>
                <FaGithub size={28}/>
            </div>
            <div className='flexf items-center gap-2 tracking-widest cursor-pointer hover:scale-[1.1]'>
               <SignOutButton imageUrl={userSession.userSession?.image}/>
            </div>
        </div>

        <div className={styles.middleContainer}>
            <div className={styles.welcomeText}>
                <div className='flex items-start flex-col gap-5'>
                    <h1>Welcome Here 👋🏼 {userSession.userSession ? `${userSession.userSession.name}` : "Loading.." }</h1>
                    <div className='w-[450px]'>
                        <p>A Simple and Ready to use Code Editor powered by AI</p>
                        <p>which provides features like auto-code-completion , syntax highlighting and more 💫</p>
                    </div>
                </div>
            </div>

            <div className={styles.projectSetupContainer}>
                <h1>Start your work &nbsp;🚀</h1>
                <div className='flex gap-4'>
                    <div className={styles.projectSetupBox}>
                        <p><MdOutlineCloudUpload size={30}/> Upload an existing file to edit</p>
                    </div>

                    <div 
                    onClick={() => setNewProjectSetUpPopBoxOpen(!isNewProjectSetUpPopBoxOpen)}
                    className={styles.projectSetupBox}>
                        <p><TiPlusOutline size={30}/>Create a new project</p>
                    </div>
                </div>
            </div>

        </div>

        <div className={styles.bottomContainer}>

            <div className={styles.heading}>
                <h1>Recent Work</h1>
                <p>Show all</p>
            </div>

            <div className={styles.recentProjectsContainer}>
                    <div className={styles.recentProjectBox}>
                        <div className='flex items-center gap-2'>
                            <div className={styles.langLogoIcon}>
                                <Image alt='hyper-x-log' fill src={"/langicons/python.svg"}/>
                            </div>
                            <p>API-Manager.py</p>
                        </div>
                        <div className='w-full flex justify-end '>
                            <p className='text-[11px] text-gray-400 tracking-wider'>Opened 1hr ago</p>
                        </div>
                    </div>
                    <div className={styles.recentProjectBox}>
                        <div className='flex items-center gap-2'>
                            <div className={styles.langLogoIcon}>
                                <Image alt='hyper-x-log' fill src={"/langicons/swift.svg"}/>
                            </div>
                            <p>Authentication.swift</p>
                        </div>
                        <div className='w-full flex justify-end '>
                            <p className='text-[11px] text-gray-400 tracking-wider'>Opened 1hr ago</p>
                        </div>
                    </div>
            </div>
        </div>
        {isNewProjectSetUpPopBoxOpen && <SetUpNewProject/>}
    </div>
  )
}

export default HomePage
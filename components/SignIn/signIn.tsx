import React from 'react'
import Image from 'next/image'
import styles from './signIn.module.scss'
import SignInButton from '../Buttons/SignInButton/SignInButton'



const SignInPage = () => {
  return (
    
    <div className={styles.container}>
        <div className='flex items-center justify-between mt-[60px] pl-[70px] pr-[70px] w-full'>
            <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                    <Image alt='hyper-x-log' fill src={"/icons/hyperxLogo.png"}/>
                </div>
                <h1>HyperX.ai</h1>
            </div>
        </div>

        <div className={styles.middleContainer}>
            <div className={styles.welcomeText}>
                <div className='flex items-start flex-col gap-5'>
                    <h1>Welcome To HyperX.ai ✨</h1>
                    <div className='w-[450px]'>
                        <p>A Simple and Ready to use Code Editor powered by AI</p>
                    </div>
                </div>
            </div>
        </div>

        <SignInButton/>



    </div>
  )
}

export default SignInPage
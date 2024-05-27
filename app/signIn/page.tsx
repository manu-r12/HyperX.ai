import SignInPage from '@/components/SignIn/signIn'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { options } from '@/nextAuth/options'

const SignIn = async () => {

 const session = await getServerSession(options)

 if (session){
    console.log("Session Found!, Here are the use details", session.user)
    redirect("/home")
 }else{ 
  return (
    <div>
        <SignInPage/>
    </div>
  )
 }
}

export default SignIn
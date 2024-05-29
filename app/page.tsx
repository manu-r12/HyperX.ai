import HomePage from "@/components/Home/home";
import { getServerSession } from "next-auth";
import { options } from "@/nextAuth/options";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';




export default async function Home() {

  const session = await getServerSession(options);

  if (!session){
    redirect('/signIn')
  }else{



  return (
    <>
      <HomePage userSession={session?.user}/>
    </>
  );
}

}

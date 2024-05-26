import HomePage from "@/components/Home/home";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import CodeEditor from "@/components/CodeEditor/codeEditor";



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

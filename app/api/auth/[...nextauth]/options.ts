import { addUserToFirestore } from "@/utils/addNewUserToFirebase";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'


export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_CLIENT_ID as string,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
      ],
      callbacks: {
        async signIn({user, account, profile}) {
            console.log("Triggred")
            await addUserToFirestore(user)
            return true;
        }

      }
}


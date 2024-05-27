import { User } from "next-auth";
import { db } from "@/database/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const addUserToFirestore = async (user: User) =>{

    if (user && user.email){

        const userRef = doc(db, "users", user.email);
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()){

          console.log("Well Well User already exists, so no need to save user again!! 🙂")
          console.log("Here is the data", userSnap.data())

        }else{

          try{
            await setDoc(userRef, 
            {
              uid: user.id,
              name: user.name,
              friends: []
            });

          }catch (error){
              console.log("OOPS error in Saving the user data to firebase !!", error)
          }
        }
      }

}
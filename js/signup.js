import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,database } from "./firebaseConfig.js";
import { getDoc, doc, setDoc,  } from "@firebase/firestore";

const userSetEmail = document.querySelector('#email-input');
const userSetPassword = document.querySelector('#password-input');

const signUpButton = document.querySelector('#sign-up-confirm-button');

signUpButton.addEventListener('click', async()=>{
    const userEmail = userSetEmail.value;
    const userPassword = userSetPassword.value;
    try{
        const userObject = await createUserWithEmailAndPassword(
            auth, 
            userEmail,
            userPassword
        )
        const user = userObject.user;
        const userID = user.uid;

        const docRef = doc(database, "users", userID);
        
        const data = {
            email: userEmail,
            password: userPassword,
            
        }

        await setDoc(docRef, );

    } catch(error){

    }
    finally{
        console.log('Sign Up Cycle Finished');
    }
})
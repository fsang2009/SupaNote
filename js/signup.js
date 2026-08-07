import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig.js";

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
        const user = userObject.user
        const userID = user.uid
    } catch(error){

    }
    finally{
        console.log('Sign Up Cycle Finished');
    }
})
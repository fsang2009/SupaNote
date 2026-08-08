import {auth} from './firebaseConfig.js'
import { signInWithEmailAndPassword } from 'firebase/auth'

const userEmailInput = document.querySelector('#email-input');
const userPasswordInput = document.querySelector('#password-input');
const logInButton = document.querySelector('#log-in-confirm-button');

logInButton.addEventListener('click',async()=>{
    const userEmail = userEmailInput.value;
    const userPassword = userPasswordInput.value;
    
    try{const userObject = await signInWithEmailAndPassword(
        auth, 
        userEmail,
        userPassword
    )

    const user = userObject.user;
    const userID = user.uid;
} catch(error){
    
}
finally{
    console.log('Login Cycle Complete')
}
})
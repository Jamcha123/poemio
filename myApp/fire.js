import {initializeApp} from 'firebase/app';
import {initializeAppCheck, ReCaptchaEnterpriseProvider} from 'firebase/app-check'; 
import {getAuth, onAuthStateChanged, signInAnonymously} from 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyDKE0-SC87lyz79RTgQgrMtigLYnslWwwk",
    authDomain: "poemio-7c03e.firebaseapp.com",
    projectId: "poemio-7c03e",
    storageBucket: "poemio-7c03e.firebasestorage.app",
    messagingSenderId: "804417319515",
    appId: "1:804417319515:web:7c373feee0d0e3886c057e",
    measurementId: "G-JHCRJ48D95"
}
const app = initializeApp(config); 

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6Ld-A7gqAAAAABgcDKv7-XasOEaH6fi9g6aJLEwY"), 
    isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app); 
auth.useDeviceLanguage(); 
signInAnonymously(auth); 

onAuthStateChanged(auth, (user) => {
    if(user === null){
        console.log("user not found")    
    }else{
        console.log("user logged in");
    }
})
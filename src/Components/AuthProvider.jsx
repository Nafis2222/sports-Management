import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "./firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [userFinal,setuserFinal] = useState(null)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signIn = () =>{
        return signInWithPopup(auth,provider)
    }

    const LogOut = () =>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
            setuserFinal(currentUser)
        })
       
    },[])
    const AuthInfo = {userFinal,createUser,logIn,signIn,LogOut}
    return (
        <AuthContext.Provider value={AuthInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import app from "./firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

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
    const AuthInfo = {createUser,logIn,signIn}
    return (
        <AuthContext.Provider value={AuthInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
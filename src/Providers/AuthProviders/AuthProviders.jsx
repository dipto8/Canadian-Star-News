import React, { Children, createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth =getAuth(app)
export const AuthContext = createContext(null)

export default function AuthProviders({ children }) {
    const[user, setUser] = useState(null)
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email.password)
    }
    const userInfo = {
        user,
        createUser
    }
    return (
        <div>

            <AuthContext.Provider value={userInfo}>
                {children}

            </AuthContext.Provider>

        </div>
    )
}

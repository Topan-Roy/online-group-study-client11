import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext();
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    // console.log(loading, user)
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
      };
    const singIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
       };
    const logOut=()=>{
        return signOut(auth)
       };
       const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
      };
    const authData={
        user,
        setUser,
        createUser,
        logOut,
        singIn,
        loading,
        setLoading,
        forgetPassword,
        googleSignIn,
       
    }
    useEffect(()=>{
        const unsubcribe=    onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                setLoading(false)
            })
            return()=>{
                unsubcribe();
            }
        },[])
    return<AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // definition of user
    const [user, setUser] = useState(null);
    
    // show loading screen until user is loaded in private route
    const [loading, setloading] = useState(true);

    // create new user
    const signUp = (email,password) => {
        setloading(true); // keep loading spinner until observer loads the user (refer to private route)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // add more info for user or update
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // email verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // security
    // password reset email
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth,email);
    }

    // login existing user
    const signIn = (email,password) => {
        setloading(true); // keep loading spinner until observer loads the user (refer to private route)
        return signInWithEmailAndPassword(auth,email,password);
    }

    // provider login
    const providerLogin = (provider) => {
        setloading(true); // keep loading spinner until observer loads the user (refer to private route)
        return signInWithPopup(auth,provider);
    }

    // logout
    const logOut = () => {
        setloading(true); // keep loading spinner until observer loads the user (refer to private route)
        return signOut(auth);
    }

    // observer set
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, 
            (currentUser) => {
                if(currentUser == null 
                    || currentUser.emailVerified
                    || currentUser.providerData[0].providerId === 'github.com'){
                    setUser(currentUser);
                }
                else{
                    logOut();
                }
                setloading(false); // keep loading spinner until observer loads the user (refer to private route)
            });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user, loading, setloading, 
        signUp, updateUserProfile, verifyEmail,
        signIn, providerLogin, logOut,
        resetPassword,
    };

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
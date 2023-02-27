import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // definition of user
    const [user, setUser] = useState(null);
    
    //
    const [loading, setloading] = useState(true);

    // create new user
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // login existing user
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    // provider login
    const providerLogin = (provider) => {
        return signInWithPopup(auth,provider);
    }

    // logout
    const logOut = () => {
        return signOut(auth);
    }

    // observer set
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, 
            (currentUser) => {
                setUser(currentUser);
            });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, loading, setloading, signUp, signIn, providerLogin, logOut};

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
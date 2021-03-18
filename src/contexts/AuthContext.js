import React, { useContext, useState, useEffect } from 'react';
import app from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return app.auth().createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return app.auth().signOut()
    }

    function forgotPassword(email) {
        return app.auth().sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unSubscribe = app.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unSubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        forgotPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

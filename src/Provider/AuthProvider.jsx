import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [program, setProgram] = useState([]);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // set and get token
            if(currentUser) {
                axios.post('https://daily-fit-server.vercel.app/jwt', { email: currentUser.email })
                  .then(res => {
                    const token = res.data;
                    localStorage.setItem('access-token', token);
                    setLoading(false);
                  })
            }
            else {
                localStorage.removeItem('access-token')
            }
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    // revived class data and pass
    const paymentClass = (program) => {
        // setLoading(true)
        return setProgram(program)
    }

    const authInfo = {
        signUp,
        updateUserProfile,
        login,
        googleSignIn,
        logout,
        user,
        loading,
        paymentClass,
        program
    } 
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
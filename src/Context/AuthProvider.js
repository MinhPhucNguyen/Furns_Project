import React, { useEffect, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import Loading from '../components/Loading';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubcirbed = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, phoneNumber } = user;
                setCurrentUser({ uid, displayName, email, phoneNumber });
                setLoading(false);
            } else {
                setLoading(false);
            }
        });

        return () => {
            unsubcirbed();
        };
    }, [navigate]);

    const value = { currentUser, loading };

    return <AuthContext.Provider value={value}>{loading ? <Loading /> : children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };

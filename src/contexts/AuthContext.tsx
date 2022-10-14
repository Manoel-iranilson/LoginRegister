import React, { createContext, useState, useEffect, ReactNode } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const login = localStorage.getItem("auth")

        if (login) {
            setAuth(true)
        }

    }, []);

    const [auth, setAuth] = useState(false);




    return (
        <AuthContext.Provider value={{ auth, setAuth }}>{children} </AuthContext.Provider>
    );
}

export default AuthProvider;
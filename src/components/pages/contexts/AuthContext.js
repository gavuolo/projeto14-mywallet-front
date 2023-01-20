import React, { createContext, useState } from 'react';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [token, setToken] = useState({})
    return (
        <AuthContext.Provider value={ {user, setUser , token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
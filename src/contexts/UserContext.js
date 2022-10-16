import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const user = { displayName: 'Azizul' }

    const authInfo = { user: user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
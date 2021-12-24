import React, { createContext, useMemo, useState, useContext } from 'react';

const UserContext = createContext();
const initialValue = { username: "", pass: "" }

export function UserProvider(props) {

    const [user, setUser] = useState(initialValue);

    const value = useMemo(() => {
        return ({
            user,
            setUser,
        }, [user, setUser])
    })

    return <UserContext.Provider value={value} {...props} />

}

export function useUsuario() {
    const context = useContext(UserContext)

    return context;
}
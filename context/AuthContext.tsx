import { createContext, useContext, ReactNode, useState } from "react";

type authContextType = {
    user: boolean | null;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    user: null,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState< boolean | null>(null);

    const login = () => {
        setUser(true);
        // console.log("login")
    };

    const logout = () => {
        setUser(false);
        // console.log("logout")
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
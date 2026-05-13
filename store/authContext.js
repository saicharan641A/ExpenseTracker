import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    userId: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {},
});

export function AuthContextProvider({ children }) {

    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();

    function authenticate(token, userId) {
        setAuthToken(token);
        setUserId(userId);
    }

    function logout() {
        setAuthToken(null);
        setUserId(null);
    }

    const value = {
        token: authToken,
        userId,
        isAuthenticated: !!authToken,
        authenticate,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
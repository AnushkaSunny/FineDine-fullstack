import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("fineDineUser");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const register = async (userData) => {

        const response = await authService.register(userData);

        setUser(response);

        localStorage.setItem(
            "fineDineUser",
            JSON.stringify(response)
        );

        return response;
    };

    const login = async (loginData) => {

        const response = await authService.login(loginData);

        setUser(response);

        localStorage.setItem(
            "fineDineUser",
            JSON.stringify(response)
        );

        return response;
    };

    const logout = () => {

        setUser(null);

        localStorage.removeItem("fineDineUser");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                register,
                login,
                logout,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
import {createContext, useContext, useState, useEffect, useMemo} from 'react';
import axios from "axios";

const AuthContext = createContext();

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const savedToken = localStorage.getItem('token');

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        if (savedToken) {
            setToken(savedToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
        }
    }, []);

    const refreshUser = async (): Promise<any> => {
        try {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            console.log('Checking existing token: ' + user);
            if (!token) {
                // noinspection ExceptionCaughtLocallyJS
                throw new Error('No token'); // goes to catch block and therefore clears local storage and such
            }

            const response = await axios.get(`${apiUrl}/user/whoAmI`);
            if (response.status === 200) {
                console.log('Successfully refreshed user: ' + response.data);
                login({userData: {id: response.data}, token: token});
                return response.data;
            } else {
                console.log('Failed to refresh user: ' + response);
                logout();
            }
        } catch (e) {
            logout(); // Clear Token and refresh state
        }
        return null;
    }

    const login = ({ userData, token }) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    const value = useMemo(() => ({
        user,
        token,
        login,
        logout,
        refreshUser,
        isAuthenticated: !!token
    }), [user, token]);

    //TODO const isAuthenticated = !!token; round trip to API ?
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

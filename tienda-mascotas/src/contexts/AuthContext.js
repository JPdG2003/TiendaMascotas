import { useState, useEffect, createContext } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) { 
    const { children } = props;

    const [user, setUser] =useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {                                 //recovers the session on each reload of the page
          (async () => {
            const token = tokenCtrl.getToken();

            if (!token) {
                logout();
                setLoading(false);
                return;
            }

            if(tokenCtrl.hasExpired(token)) {
                logout();
            } else {
                await login(token);
            }
          })();
    }, []);

    const login = async (token) => {
        try {
            tokenCtrl.setToken(token);
            const response = await userCtrl.getMe();
            console.log(response);
            setUser(response);
            setToken(token);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const logout = () => {
        tokenCtrl.removeToken();  /* We remove the token to sign the user out */
        setToken(null);
        setUser(null);
    }

    /* const updateUser = (key, value) => {
        setUser({
            ...user,
            [key]: value,
        })
    }; */

    const data = {
        accessToken: token,
        user,
        login,
        logout: null,
        updateUser: null,
    };

    if (loading) return null;

    return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
    );
}
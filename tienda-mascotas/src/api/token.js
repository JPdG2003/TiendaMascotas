import { ENV } from "@/utils";
import jwtDecode from "jwt-decode";

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token); /* The token will be changed on all sites where it's used */
    }

    getToken(){
        return localStorage.getItem(ENV.TOKEN);
    }

    removeToken(){
        localStorage.removeItem(ENV.TOKEN);
    }

    hasExpired(token) {
        const tokenDecode = jwtDecode(token);
        const expireDate = tokenDecode.exp *1000;
        const currentDate = new Date().getTime();

        if (currentDate > expireDate) {
            return true;
        }

        return false;
    }
}
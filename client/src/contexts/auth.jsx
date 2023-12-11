import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";
import * as authService from "../API/auth";
import { addItem, editItem } from "../API/itemApi";

const Authentication = createContext();

Authentication.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [auth, setAuth] = usePersistedState("auth", {});

    const loginHandler = async (values) => {
        if (values.email === "" || values.password === "") {
            throw alert("Всички полета са задължителни!");
        }
        try {
            const result = await authService.login(
                values.email,
                values.password,
            );
            if (result == undefined) {
                return {};
            }
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate("/");
        } catch (error) {
            console.log("here");
            throw alert("gre6ka");
        }
    };
    //TODO catch error
    const registerHandler = async (values) => {
        if (values.password !== values.repeatPass) {
            throw alert("Password don't match!");
        }
        const result = await authService.register(
            values.email,
            values.password,
        );

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/");
    };

    const logoutHandler = () => {
        localStorage.clear("accessToken");
        setAuth({});
        navigate("/");
    };
    const CreateItemHandler = async (values) => {
        try {
            await addItem(values);

            navigate("/catalog");
        } catch (error) {
            console.log(error);
        }
    };

    const info = {
        loginHandler,
        registerHandler,
        logoutHandler,
        CreateItemHandler,
        userId: auth._id,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <Authentication.Provider value={info}>
            {children}
        </Authentication.Provider>
    );
};
export default Authentication;

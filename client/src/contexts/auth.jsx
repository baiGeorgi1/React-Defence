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
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate("/");
  };
  //TODO catch error
  const registerHandler = async (values) => {
    if (values.password !== values.repeatPass) {
      throw console.log("error");
    }
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate("/");
  };

  const logoutHandler = () => {
    setAuth({});
    navigate("/");
    localStorage.removeItem("accessToken");
  };
  const CreateItemHandler = async (values) => {
    try {
      const result = await addItem(values);

      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };
  const EditItemHandler = async (values) => {
    try {
      const result = await editItem(values, values._id);

      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };
  // const DeleteItemHandler = async (itemId) => {
  //   try {

  //     await deleteItem(itemId);

  //     navigate("/catalog");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const info = {
    loginHandler,
    registerHandler,
    logoutHandler,
    CreateItemHandler,
    // DeleteItemHandler,
    EditItemHandler,
    userId: auth._id,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <Authentication.Provider value={info}>{children}</Authentication.Provider>
  );
};
export default Authentication;

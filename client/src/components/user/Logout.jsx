import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../../contexts/auth";

import * as authService from "../../API/auth";

export default function Logout() {
  const navigate = useNavigate();

  const { logoutHandler } = useContext(Authentication);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logoutHandler();
        navigate("/");
      })

      .catch(() => {
        logoutHandler();
        navigate("/users/login");
      });
  }, []);
  return null;
}

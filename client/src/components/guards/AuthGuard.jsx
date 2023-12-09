import { useContext } from "react";
import Authentication from "../../contexts/auth";
import { Navigate } from "react-router-dom";

export const AuthGuard = (props) => {
  const { isAuthenticated } = useContext(Authentication);

  if (!isAuthenticated) {
    return <Navigate to={"/users/login"} />;
  }
  return <>{props.children}</>;
};

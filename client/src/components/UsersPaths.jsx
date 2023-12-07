import { Route, Routes } from "react-router-dom";

import Login from "./user/login/Login";
import Logout from "./user/Logout";
import Registration from "./user/register/Registration";

const UserPaths = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
      <Route path="logout" element={<Logout />} />
    </Routes>
  );
};
export default UserPaths;

import "./Login.Module.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "../../../hooks/useForm";

import Authentication from "../../../contexts/auth";

const Login = () => {
  const { loginHandler } = useContext(Authentication);

  const { formValues, onChange, onSubmit } = useForm(
    { email: "", password: "" },
    loginHandler,
  );

  return (
    <div className="my_modal">
      <form onSubmit={onSubmit}>
        <h3>{"Вход"}</h3>
        <div className="txt_field">
          <input
            type="email"
            onChange={onChange}
            value={formValues.email}
            name="email"
            required
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            onChange={onChange}
            value={formValues.password}
            name="password"
            required
          />
          <span></span>
          <label>Password</label>
        </div>

        <input name="submit" type="submit" value="Вход" />
        <div className="signup_link">
          <Link to={"/user/register"}> {"Регистрация"}</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;

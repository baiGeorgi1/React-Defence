import "./Register.Module.css";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "../../../hooks/useForm";

import Authentication from "../../../contexts/auth";

const Register = () => {
  const { registerHandler } = useContext(Authentication);

  const { formValues, onChange, onSubmit } = useForm(
    { email: "", password: "", repeatPass: "" },
    registerHandler,
  );

  return (
    <div className="my_modal">
      <form onSubmit={onSubmit}>
        <h3> Регистрация </h3>
        <div className="txt_field">
          <input
            type="text"
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
        <div className="txt_field_repeat">
          <input
            type="password"
            onChange={onChange}
            value={formValues.repeatPass}
            name="repeatPass"
            required
          />
          <span></span>
          <label>Repeat password</label>
        </div>
        <input name="submit" type="submit" value="Регистрация" />
        <div className="signup_link">
          <Link to={"/user/login"}>{"Вход"}</Link>
        </div>
      </form>
    </div>
  );
};
export default Register;

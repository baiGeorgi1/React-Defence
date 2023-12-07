import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const [see, setSee] = useState(false);

  const onClick = () => {
    setSee((see) => (see = !see));
  };

  return (
    <Modal.Dialog show={true}>
      <Modal.Body>
        <form action="" method="POST">
          <h3>{see ? "Вход" : "Регистрация"}</h3>
          <div className="txt_field">
            <input type="text" name="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" name="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div
            className="txt_field_repeat"
            style={{ display: see ? "none" : "block" }}
          >
            <input type="repeat-password" name="repeat-password" required />
            <span></span>
            <label>Повтори паролата</label>
          </div>
          <input
            name="submit"
            type="Submit"
            value={see ? "Вход" : "Регистрация"}
          />
          <div className="signup_link">
            <Link onClick={onClick}> {see ? "Регистрация" : "Вход"}</Link>
          </div>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
};
export default Login;

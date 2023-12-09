import { Link } from "react-router-dom";
import "./Header.Module.css";
import { useContext } from "react";
import Authentication from "../../contexts/auth";

const Header = () => {
  const { isAuthenticated, email } = useContext(Authentication);

  const REGEX = /^[a-zA-z0-9.]+/g;
  const name = email?.match(REGEX);
  return (
    <header>
      <div className="my-navbar">
        <div className="logo">
          <Link to="/">
            <img
              width="140px"
              height="100px"
              src="images/honey.png"
              alt="Honey"
            />
          </Link>
        </div>
        <div className="navigation">
          <div className="nav-btns">
            <ul className="">
              <li className=" nav-item">
                <Link className="" to="/">
                  Начало
                </Link>
              </li>

              <li className="nav-items">
                <Link className="" to="/catalog">
                  Каталог
                </Link>
              </li>
              {isAuthenticated && (
                <li className="nav-items">
                  <Link className="" to="/add">
                    Добави
                  </Link>
                </li>
              )}

              {!isAuthenticated && (
                <>
                  <li className="nav-items">
                    <Link className="items" to="/users/login">
                      Влез
                    </Link>
                  </li>

                  <li className="nav-items">
                    <Link className="" to="/users/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated && (
                <>
                  <li className="nav-items">
                    <Link className="" to="/users/logout">
                      изход
                    </Link>
                  </li>
                  <li className="welcome">
                    <span>Здравей, {name}!</span>
                  </li>
                </>
              )}

              <li className="nav-items">
                <Link to="#">
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

import { Link } from "react-router-dom";
import "./Header.Module.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="row d_flex">
          <div className=" col-md-2 col-sm-3 col logo_section">
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
          </div>

          <nav className="navigation navbar navbar-expand-md navbar-dark ">
            <div className="nav-btns">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active ">
                  <Link className="nav-link" to="/">
                    Начало
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">
                    Catalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Добави
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;

import { Link } from "react-router-dom";
// import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        {/* <div className="container-fluid"> */}
        <div className="row d_flex">
          <div className=" col-md-2 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
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
            </div>
          </div>
          <div className="col-md-8 col-sm-9">
            <nav className="navigation navbar navbar-expand-md navbar-dark ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample04"
                aria-controls="navbarsExample04"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active ">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/catalog">
                      Catalog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/quality">
                      Receipe
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
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-2">
            <ul className="email text_align_right">
              <li className="d_none">
                <Link to="Javascript:void(0)">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="d_none">
                {" "}
                <Link to="Javascript:void(0)">
                  <i
                    className="fa fa-search"
                    style={{ cursor: "pointer" }}
                    aria-hidden="true"
                  ></i>
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};
export default Header;

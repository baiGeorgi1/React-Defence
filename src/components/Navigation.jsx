import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="header">
        <div className="container-fluid">
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
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="shop.html">
                        shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="quality.html">
                        quality
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* <div className="col-md-2">
              <ul className="email text_align_right">
                <li className="d_none">
                  <a href="Javascript:void(0)">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="d_none">
                  {" "}
                  <a href="Javascript:void(0)">
                    <i
                      className="fa fa-search"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                    ></i>
                  </a>{" "}
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;

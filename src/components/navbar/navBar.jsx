import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 mb-4">
      <div className="container-fluid ">
        <Link to="/" className="fs-3 ubuntu navbar-brand ps-5">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}

          <style jsx="true">
            {`
              button[aria-expanded="false"] > .fa-xmark {
                display: none;
              }

              button[aria-expanded="true"] > .fa-bars {
                display: none;
              }
            `}
          </style>

          <i className="fa-solid fa-bars fw-bold text-dark"></i>
          <i className="fa-solid fa-xmark fw-bold text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end ps-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              activeclassname="active"
              className="nav-link"
              aria-current="page"
              to="/"
            >
              Charecters
            </NavLink>
            <NavLink className="nav-link" to="/location">
              Location
            </NavLink>
            <NavLink className="nav-link" to="/episodes">
              Episodes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

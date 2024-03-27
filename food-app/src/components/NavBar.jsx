import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className="text-warning fw-bold fs-3">FOODIE</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-end">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <h2 className="text-success fw-bold fs-5">Home</h2>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h2 className="text-secondary fw-bold fs-5">Cart</h2>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <h2 className="text-secondary fw-bold fs-5">Profile</h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;

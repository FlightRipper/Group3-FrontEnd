import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import i10 from './10.png';
import '../pages/custom.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top px-5 py-4 justify-content-end">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex">
            <Link to={'/'}>
              <div className="row">
                <img
                  src={i10}
                  alt=""
                  className="d-block w-25 h-25 custom-image-class"
                />
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end mx-5"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/signin'}>
                  Sign In
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={''}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Raise For
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link className="dropdown-item" to={''}>
                      Animals
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={''}>
                      Medical
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={''}>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={''}>
                      View All
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

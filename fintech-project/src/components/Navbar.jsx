import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import i10 from './10.png';
import '../pages/custom.scss';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogOut } from '../hooks/useLogOut';


const Navbar = () => {
  const { logout } = useLogOut();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent fixed-top px-5 py-4 justify-content-end bg-white">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex">
          <img src={i10} alt="" className="w-25 h-25" />
            <Link to={'/'}>
              <div className="row"></div>
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
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to={'/signin'}>
                    Sign In
                  </Link>
                </li>
              )}
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
              {user && (
                <li className="nav-item d-flex justify-content-between align-items-baseline gap-3">
                  <Link
                    className="nav-link"
                    onClick={handleClick}
                    to={'/signin'}
                  >
                    Log out
                  </Link>
                  <i className="bi bi-person text-white h4"></i>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

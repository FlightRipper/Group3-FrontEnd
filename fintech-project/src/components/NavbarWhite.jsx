import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import i10 from './10.png';
import '../pages/custom.scss';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogOut } from '../hooks/useLogOut';

const Navbar = ({handleFilter}) => {
  const { logout } = useLogOut();

  const handleClick = () => {
    logout();
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow px-5 py-4 justify-content-end bg-white">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex">
          <img src={i10} alt="" className="w-25 h-25 custom-image-class" />
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
                <ul className="dropdown-menu bg-body">
                  <li>
                    <Link className="dropdown-item" to={''} onClick={()=>handleFilter("animal")}>
                      Animals
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={''}onClick={()=>handleFilter("medical")}>
                      Medical
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={''} onClick={()=>handleFilter("education")}>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={''} onClick={()=>handleFilter("All")}>
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

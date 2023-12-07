import React, { useState } from 'react';
import './AdminDashboard.css';
import logo from './10.png';
import background from './100.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CampaignRequests from './Components/CampaignRequests.jsx';
import { Link } from 'react-router-dom';
import AdminHome from './Components/AdminHome.jsx';
import DashboardAdminsList from './Components/DashboardAdminsList.jsx';
import DashboardUsersList from './Components/DashboardUsersList.jsx';
import OngoingCampaigns from './Components/OngoingCampaigns.jsx';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <div className="admin-dashboard w-100 vh-100 h-100 d-flex align-items-center justify-content-center">
      <img
        src={background}
        className=" w-100 h-100 vh-100 dashboard-background"
      ></img>

      <div className="dashboard-container d-flex row">
        <nav className="dashboard-nav w-100 p-3 d-flex align-items-center">
          <img src={logo} alt={logo} className="dashboard-logo"></img>
        </nav>
        <div className="dashboard-menu-body w-100 d-flex column p-0">
          <div className="dashboard-menu w-25 d-flex flex-column m-0 ">
            //home tab
            <div className="home-tab d-flex flex-row p-5 align-items-center justify-content-center w-100">
              <Link
                className="d-flex align-items-center text-decoration-none"
                onClick={() => setSelectedTab('Home')}
              >
                <i className="home-icon bi bi-house "></i>
                <h4 className="mt-3 mx-3">Dashboard</h4>
              </Link>
            </div>
            <div className="users-tab d-flex flex-row p-2 align-items-center justify-content-center w-100 my-5">
              <Link
                className="d-flex align-items-center text-decoration-none"
                onClick={() => setSelectedTab('Users')}
              >
                <i className="users-icon bi bi-people"></i>
                <h4 className="mt-3 mx-3">Users</h4>
              </Link>
            </div>
            <div className="admins-tab d-flex flex-row p-2 align-items-center justify-content-center w-100 mb-5">
              <Link
                className="d-flex align-items-center text-decoration-none"
                onClick={() => setSelectedTab('Admin')}
              >
                <i className="admins-icon bi bi-cast"></i>
                <h4 className="mt-3 mx-3">Admins</h4>
              </Link>
            </div>
            <div className="campaign-tab d-flex flex-row p-2 align-items-center justify-content-center w-100">
              <i className=" campaign-icon bi bi-bank"></i>

              <Link
                className="nav-link dropdown-toggle d-flex flex-row align-items-center justify-content-center m-0"
                to={''}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h4 className="mt-3 mx-3">Campaigns</h4>
              </Link>
              <ul className="dropdown-menu bg-dark ">
                <li>
                  <Link
                    className="dropdown-item p-0 text-center"
                    onClick={() => setSelectedTab('requests')}
                  >
                    <h5 className="mt-3 mx-3 text-white">Requests</h5>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item p-0 text-center"
                    onClick={() => setSelectedTab('ongoing')}
                  >
                    <h5 className="mt-3 mx-3 text-white">Ongoing</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {selectedTab === 'Admin' && <DashboardAdminsList />}
          {selectedTab === 'Users' && <DashboardUsersList />}
          {selectedTab === 'requests' && <CampaignRequests />}
          {selectedTab === 'ongoing' && <OngoingCampaigns />}
          {selectedTab === 'Home' && <AdminHome />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

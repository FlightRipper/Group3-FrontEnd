import React from "react";
import "./AdminDashboard.css";
import logo from "./10.png";
import background from "./dashboardBackground.png";
// import "/home/nancy/Group3-FrontEnd/fintech-project/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import CampaignRequests from "./Components/CampaignRequests.jsx";

const AdminDashboard = () => {
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
          <div className="dashboard-menu w-25 d-flex flex-column m-0">
            <div className="home-tab d-flex flex-row p-2 align-items-center justify-content-center w-100">
              <i class="home-icon bi bi-house "></i>
              <h4 className="mt-3 mx-3">Dashboard</h4>
            </div>
            <div className="users-tab d-flex flex-row p-2 align-items-center justify-content-center w-100">
              <i class="users-icon bi bi-people"></i>
              <h4 className="mt-3 mx-3">Users</h4>
            </div>
            <div className="users-tab d-flex flex-row p-2 align-items-center justify-content-center w-100">
              <i class="users-icon bi bi-people"></i>
              <h4 className="mt-3 mx-3">Users</h4>
             
            </div>
          </div>
          
            <CampaignRequests/>
            
        
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

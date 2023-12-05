import React, { useState } from "react";
import "./AdminDashboard.css";
import logo from "./10.png";
import background from "./dashboardBackground.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import CampaignRequests from "./Components/CampaignRequests.jsx";
import CampaignOngoing from "./Components/CampaignOngoing.jsx"
import { Link } from "react-router-dom";

const AdminDashboard = () => {
 const [selectedTab, setSelectedTab] = useState("");

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
              <Link className="d-flex align-items-center text-decoration-none">
              <i className="home-icon bi bi-house "></i>
              <h4 className="mt-3 mx-3">Dashboard</h4>
              </Link>
            </div>

           //users tab

            <div className="users-tab d-flex flex-row p-2 align-items-center justify-content-center w-100 my-5">
            <Link to={"/users/table"}  className="d-flex align-items-center text-decoration-none">
              <i className="users-icon bi bi-people"></i>
              <h4 className="mt-3 mx-3">Users</h4>
              </Link>


            </div>

            //admins tab
            <div className="admins-tab d-flex flex-row p-2 align-items-center justify-content-center w-100 mb-5">
              <Link to={"/admins/table"}  className="d-flex align-items-center text-decoration-none">
            <i className="admins-icon bi bi-cast"></i>
              <h4 className="mt-3 mx-3">Admins</h4>
              </Link>
            </div>

           <div className="users-tab d-flex flex-row p-2 align-items-center justify-content-center w-100">
             <i class="users-icon bi bi-people"></i>

             <Link
               className="nav-link dropdown-toggle d-flex flex-row align-items-center justify-content-center m-0"
               to={""}
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
             >
               <h4 className="mt-3 mx-3">Campaigns</h4>
             </Link>
             <ul className="dropdown-menu bg-dark ">
               <li>
                <Link className="dropdown-item" onClick={() => setSelectedTab("requests")}>
                  <h5 className="mt-3 mx-3 text-white">Requests</h5>
                </Link>
               </li>
               <li>
                <Link className="dropdown-item" onClick={() => setSelectedTab("ongoing")}>
                  <h5 className="mt-3 mx-3 text-white">Ongoing</h5>
                </Link>
               </li>
             </ul>
           </div>
         </div>
         {selectedTab === "Admin" && <q />}
         {selectedTab === "Users" && <q />}
         {selectedTab === "requests" && <CampaignRequests />}
         {selectedTab === "ongoing" && <CampaignOngoing />}
       </div>
     </div>
   </div>
 );
};

export default AdminDashboard;

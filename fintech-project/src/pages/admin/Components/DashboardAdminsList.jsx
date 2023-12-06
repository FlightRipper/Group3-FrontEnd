import React from 'react'
import AdminsTableData from './AdminsTableData.jsx';
import "../AdminDashboard.css";
import Dropdown from "react-bootstrap/Dropdown";
import  { useEffect, useState } from "react";
import axios from 'axios';

const DashboardAdminsList = () => {

const [admin,setadmin]=useState()








useEffect(()=>{

  const fetchAdmin=async()=>{
    try{
      const response = await axios.get(
        "http://localhost:5001/admins/"
      );
  const data = response.data;
  setadmin(data)
  console.log(data)
    }
    catch(error){
      console.log(error);
      setadmin(null)
    }
  }
  fetchAdmin();
  
  
  },[])





    return (
        <div className="w-100">
          <div className="dashboard-body w-100 h-100 d-flex row m-0 align-items-center justify-content-center">
            <div className="body-header w-100 d-flex align-items-center  justify-content-between column p-3 m-0 sticky-top">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filter By
                </Dropdown.Toggle>
    
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">User Role</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">View All</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="admin-search-div">
                <input
                  type="text"
                  className="admin-search px-3"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="body-content w-100 p-0">
    
              <table className="table table-dark mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                
                {admin && admin.map((item,index)=>(
<AdminsTableData key={index}  data={item}   index={index}   />

            ))}



    
              </table>
            </div>
          </div>
        </div>
      );
}

export default DashboardAdminsList

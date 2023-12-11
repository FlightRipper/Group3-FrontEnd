import React from 'react';
import AdminsTableData from './AdminsTableData.jsx';
import '../AdminDashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../../hooks/useAuthContext.jsx';
import SpinnerLoadingSmalle from '../../../components/SpinnerLoadingSmalle.jsx';

const DashboardAdminsList = () => {
  const [admin, setadmin] = useState();
  const [searchTerm, setSearchTerm]= useState("");
  const [loading , setLoading] = useState(false)
  const { user } = useAuthContext();

  useEffect(() => {
    setLoading(true)
    const fetchAdmin = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admins/', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = response.data;
        setadmin(data);
        console.log(data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setadmin(null);
        setLoading(false)
      }
    };
    fetchAdmin();
  }, []);

 

  const handleDelete = async (deletedAdminId) => {
    // Update the user state after deletion
    setadmin((prevAdmin) => prevAdmin.filter((admin) => admin.id !== deletedAdminId));
  };

  return (
    <div className="w-100">
      <div className="dashboard-body w-100 h-100 d-flex row m-0 align-items-center justify-content-center">
        <div className="body-header w-100 d-flex align-items-center  justify-content-between column p-3 m-0 sticky-top">
         
          <div className="admin-search-div">
            <input
              type="text"
              className="admin-search px-3"
              placeholder="Search"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              style={{color:'white'}}

            
            />
          </div>
        </div>
        <div className="body-content w-100 p-0">
          {loading ? <SpinnerLoadingSmalle /> : (
          <table className="table table-dark mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {admin &&
              admin
              .filter((item)=>
              searchTerm ==="" ||
              (item.username &&
                item.username.toLowerCase().includes(searchTerm.toLowerCase()))
                )
              .map((item, index) => (
                <AdminsTableData key={index} data={item} index={index} onDelete={handleDelete}/>
              ))}
          </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminsList
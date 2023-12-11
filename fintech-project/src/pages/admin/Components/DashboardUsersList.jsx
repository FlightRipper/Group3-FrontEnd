import '../AdminDashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import UsersTableData from './UsersTableData.jsx';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext.jsx';

const DashboardUsersList = () => {
  const { user } = useAuthContext();

  const [users, setusers] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('All');

  const handleFilter = (userType) => {
    setSelectedUserType(userType);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = response.data;
        setusers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setusers(null);
      }
    };
    fetchUser();
  }, []);

  const handleDelete = async (deletedUserId) => {
    // Update the user state after deletion
    setusers((prevUser) =>
      prevUser.filter((user) => user.id !== deletedUserId)
    );
  };

  return (
    <div className="w-100">
      <div className="dashboard-body w-100 h-100 d-flex row m-0 align-items-center justify-content-center">
        <div className="body-header w-100 d-flex align-items-center  justify-content-between column p-3 m-0 sticky-top">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilter('donor')}>
                User Role: Donor
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('projectOwner')}>
                User Role: Owner
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('All')}>
                View All
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <input
            type="text"
            className="admin-search px-3"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ color: 'white' }}
          />
        </div>
        <div className="body-content w-100 p-0">
          <table className="table table-dark mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Balance</th>
                <th scope="col">User Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {users &&
              users
                .filter(
                  (item) =>
                    (selectedUserType === 'All' ||
                      item.userType === selectedUserType) &&
                    ((searchTerm === '' && item.username) ||
                      (item.username &&
                        item.username
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())))
                )
                .map((item, index) => (
                  <UsersTableData
                    key={index}
                    data={item}
                    index={index}
                    onDelete={handleDelete}
                  />
                ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardUsersList;

import React from 'react';
import axios from 'axios';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useState } from 'react';


const AdminsTableData = ({ data, index }) => {
  const { user } = useAuthContext();

  const ondelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/admins/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Handle success case here
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  
    return (
      <tbody>
        <tr>
          <td className="admin-id-dashboard">{index + 1}</td>
          <td className="admin-username-dashboard">{data.username}</td>
          <td className="admin-email-dashboard">{data.email}</td>
          <td className="admin-action-dashboard">
            <i className="bi bi-trash" onClick={ondelete}></i>
          </td>
        </tr>
      </tbody>
    );
  };
  
  export default AdminsTableData;
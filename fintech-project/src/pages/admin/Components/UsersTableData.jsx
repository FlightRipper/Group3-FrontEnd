// UsersTableData.jsx

import React from 'react';
import axios from 'axios';

const UsersTableData = ({ data, index, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5001/users/${data.id}`);
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Call onDelete to notify the parent component about the deletion
      onDelete(data.id);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <tbody>
      <tr>
        <td className='user-id-dashboard'>{index + 1}</td>
        <td className='user-username-dashboard'>{data.username}</td>
        <td className='user-email-dashboard'>{data.email}</td>
        <td className='user-balance-dashboard'>{data.balance}</td>
        <td className='user-usertype-dashboard'>{data.userType}</td>
        <td className='user-action-dashboard'>
          <i className="bi bi-trash" onClick={handleDelete}></i>
        </td>
      </tr>
    </tbody>
  );
};

export default UsersTableData;

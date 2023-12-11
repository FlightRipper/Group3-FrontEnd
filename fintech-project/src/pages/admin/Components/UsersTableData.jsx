import React from 'react';
import axios from 'axios';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useState } from 'react';
import SpinnerLoadingSmalle from '../../../components/SpinnerLoadingSmalle';

const UsersTableData = ({ data, index, onDelete }) => {
  const [loading, setLoading] = useState(false)
  const { user } = useAuthContext();

  const handleDelete = async () => {
    setLoading(true)
    try {
      const response = await axios.delete(
        `http://localhost:5000/users/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setLoading(false)
      // Call onDelete to notify the parent component about the deletion
      onDelete(data.id);
    } catch (error) {
      console.error('There was an error!', error);
      setLoading(false)
    }
  };

  return (
    <>{loading ? <SpinnerLoadingSmalle /> : (
    <tbody>
      <tr>
        <td className="user-id-dashboard">{index + 1}</td>
        <td className="user-username-dashboard">{data.username}</td>
        <td className="user-email-dashboard">{data.email}</td>
        <td className="user-balance-dashboard">{data.balance}</td>
        <td className="user-usertype-dashboard">{data.userType}</td>
        <td className="user-action-dashboard">
          <i className="bi bi-trash" onClick={handleDelete}></i>
        </td>
      </tr>
    </tbody>
    )}
    </>
  );
};

export default UsersTableData;

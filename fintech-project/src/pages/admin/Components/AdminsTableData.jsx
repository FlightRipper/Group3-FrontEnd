import React from 'react'
import axios from 'axios';
const AdminsTableData = ({data,index,onDelete}) => {

  const ondelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5001/admins/${data.id}`);
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Handle success case here
      onDelete(data.id);
    } catch (error) {
      console.error('There was an error!', error);
    }
    
   };

  return (
      <tbody>
              <tr>
                <td className='admin-id-dashboard'>{index+1}</td>
                <td className='admin-username-dashboard'>{data.username}</td>
                <td className='admin-email-dashboard'>{data.email}</td>
                <td className='admin-action-dashboard'>
                <i class="bi bi-trash" onClick={ondelete}></i>
                </td>
              </tr>
      </tbody>
  )
}

export default AdminsTableData;
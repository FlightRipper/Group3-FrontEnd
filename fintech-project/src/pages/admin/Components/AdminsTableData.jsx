import React from 'react'

const AdminsTableData = ({data,index}) => {
  return (
      <tbody>
              <tr>
                <td className='admin-id-dashboard'>{index+1}</td>
                <td className='admin-username-dashboard'>{data.username}</td>
                <td className='admin-email-dashboard'>{data.email}</td>
                <td className='admin-action-dashboard'>
                <i class="bi bi-trash"></i>
                </td>
              </tr>
      </tbody>
  )
}

export default AdminsTableData;
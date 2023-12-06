import React from 'react'

const UsersTableData = ({data,index}) => {
  return (
      <tbody>
              <tr>
                <td className='user-id-dashboard'>{index+1}</td>
                <td className='user-username-dashboard'>{data.username}</td>
                <td className='user-email-dashboard'>{data.email}</td>
                <td className='user-balance-dashboard'>{data.balance}</td>
                <td className='user-usertype-dashboard'>{data.userType}</td>
                <td className='user-action-dashboard'>
                <i class="bi bi-trash"></i>
                </td>
              </tr>
      </tbody>
  )
}

export default UsersTableData;

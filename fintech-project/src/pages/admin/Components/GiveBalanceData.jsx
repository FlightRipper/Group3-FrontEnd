import React from 'react';
import axios from 'axios';

const GiveBalanceData = ({ data, index }) => {
  const handleCharge = async (e) => {
    e.preventDefault();
    const amount = e.target.elements.amount.value

    try {
      const response = await axios.patch(`http://localhost:5000/admins/balance/user/${data.id}` ,amount);
        console.log(response);
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
          <form onSubmit={handleCharge} className='d-flex gap-3'>
          <input className='text-white bg-dark' type="text" id='amount' placeholder='Insert The Amount you Want to Charge'/>
          <button className='btn-primary w-25' type='submit'> Charge</button>
          </form>
        </td>
      </tr>
    </tbody>
  );
};

export default GiveBalanceData;

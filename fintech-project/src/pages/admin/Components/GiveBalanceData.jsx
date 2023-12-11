import React from 'react';
import axios from 'axios';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useState } from 'react';
import SpinnerLoadingSmalle from '../../../components/SpinnerLoadingSmalle';

const GiveBalanceData = ({ data, index }) => {
  const { user } = useAuthContext();
  const [balance, setbalance] = useState(0);
  const [messages, setmessages] = useState('');
  const [loading, setloading] = useState(false)

  const handleCharge = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
      const response = await axios.patch(
        `http://localhost:5000/admins/balance/user/${data.id}`,
        { balance: parseFloat(balance) },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);
      setmessages('User Balance successfully Added')
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setloading(false)
      // Handle success case here
    } catch (error) {
      console.error('There was an error!', error);
      setmessages('An Error occurred while Charging the balance')
      setloading(false)
    }
  };

  return (
    <>
    {loading ? <SpinnerLoadingSmalle /> : (
    <tbody>
      <tr>
        <td className="admin-id-dashboard">{index + 1}</td>
        <td className="admin-username-dashboard">{data.username}</td>
        <td className="admin-email-dashboard">{data.email}</td>
        <td className="admin-action-dashboard">
          <form onSubmit={handleCharge} className="d-flex gap-3">
            <input
              className="text-white bg-dark"
              type="number"
              onChange={(e) => setbalance(e.target.value)}
              placeholder="Insert The balance you Want to Charge"
              required
            />
            <button className="btn-primary w-25 d-flex justify-content-center" type="submit">
              Charge
            </button>
            <div
            className={
              messages === 'User Balance successfully Added'
                ? 'text-success'
                : 'text-danger'
            }
          >
            {messages}
          </div>
          </form>
        </td>
      </tr>
    </tbody>
    )}
    </>
  );
};

export default GiveBalanceData;

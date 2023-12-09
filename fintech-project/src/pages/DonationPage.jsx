import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DonationPage.css';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import jwt_decode from 'jwt-decode';
import unchr from './UNHCR.png'
import TimeSpan from './Time_Span.png'



const DonationPage = () => {
  const location = useLocation();
  const { data } = location.state;
  const { user } = useAuthContext();
  const token = user.token; // Get the token from the user object
  const decodedToken = jwt_decode(token);
  const [amount, setAmount] = useState('');
  const [messages, setmessages] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/donations/campaign/${data.id}/user/${decodedToken.id}`,
         {amount} ,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (amount > user.balance) {
        setmessages('You Don\'t Have Enough Balance');
      } else if (response.status === 201) {
        setmessages('Your Donation was sent successfully');
      } else {
        setmessages('An error occurred');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setmessages('An error occurred')
    }
  };

  return (
    <>
      <form className="sh7ade-page" onSubmit={handleSubmit}>
        <div className="sh7ade-page-LeftSide">
          <h1 className="sh7abe-page-LeftSide-Title">{data.title}</h1>
          <img
            className="sh7abe-page-LeftSide-Sha7adImage"
            src={`http://localhost:5000/uploads/${data.image}`}
          ></img>
          <div className="sh7ade-page-LeftSide-CreatedByWithImage">
            <img
              className="sh7abe-page-LeftSide-CreatedByImage"
              src={unchr}
            ></img>
            <p className="sh7ade-page-LeftSide-CreatedBy m-0">
              Created By: {data.User.username}
            </p>
          </div>
          <div className="sh7ade-page-LeftSide-CreatedAtWithImage">
            <img
              className="sh7abe-page-LeftSide-CreatedAtImage"
              src={TimeSpan}
            ></img>
            <p className="sh7ade-page-LeftSide-CreatedAt m-0">
              Created At: {data.startDate}
            </p>
          </div>
          <p className="sh7ade-page-LeftSide-Description">{data.description}</p>
        </div>

        <div className="sh7ade-page-DonationForm shadow-lg">
          <h1 className="sh7abe-page-EnterDonation-Text">
            Enter your Donation
          </h1>
          <p className="sh7ade-page-Text-Form">
            WeRise is a 100% startup funded and created by Lebanese youths. If
            you'd like to help us grow, you can tip us here. Thank you!
          </p>
          <div className="sh7ade-page-ThankYouAndAmount">
            <p>Thank you for including an amount of:</p>
            <div className="sh7ade-page-input">
              <input
                type="number"
                placeholder=" 0.0$"
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            className="sh7ade-page-SubmitButton"
            type="submit"
          >
            Submit Donation
          </button>
          <div className={messages === 'Your Donation was sent successfully' ? 'text-success' : 'text-danger'}>
 {messages}
</div>
        </div>
      </form>
    </>
  );
};

export default DonationPage;

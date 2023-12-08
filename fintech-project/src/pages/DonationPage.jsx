
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./DonationPage.css";
import image from "../components/10.png";
import unchr from "../components/UNHCR.png";
import clock from "../components/Time_Span.png";
import { InputGroup } from "react-bootstrap";
import Navbar from "../components/NavbarWhite";


const DonationPage = () => {
  const {campaignId, UserId} = useParams();
  const [campaign, setCampaign] = useState(null);
  const [user, SetUser] = useState(null);
  const userBalance = user ? user.balance : 0;
  const [inputValue, setInputValue] = useState(0);

  const triggerFunction = (amount) => {
    console.log(`function with amount: ${amount}`);
  }

  const checkBalance = async () => {
    if (userBalance >= inputValue && inputValue != 0 && inputValue > 0) {
      triggerFunction(inputValue);
      const newAmount = campaign.balance + inputValue;

      try {
        const response = await axios.patch(`https://localhost:5000/campaigns/${campaignId}`, {
          'amount': newAmount,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      const UserBalance = user.balance - inputValue
      try {
        const response = await axios.patch(`https://localhost:5000/users/${user.id}`, {
          'balance': UserBalance,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error('Not enough balance');
    }
  }

  useEffect(() => {

    const fetchCampaign = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5000/campaigns/${campaignId}`
        );
        const campaignData = response.data;
        setCampaign(campaignData);
        console.log(campaignData)
      } catch (error) {
        console.error("Error fetching Campaign", error);
        setCampaign(null);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5000/users/${UserId}`
        );
        const data = response.data;
        SetUser(data);
        console.log(data)
      }
      catch (error) {
        console.log()
        console.error("Error fetching User", error);
        SetUser(null);
      }
    }

    fetchUser();
    fetchCampaign();

  }, [campaignId]);

  return (
    <>
    <div className = "sh7ade-page">
      <div className = "sh7ade-page-LeftSide">
        <h1 className = "sh7abe-page-LeftSide-Title">{/*{campaign.title}*/}Title kousa kousa</h1>
        <img className = "sh7abe-page-LeftSide-Sha7adImage" src = {image} ></img>
        <div className="sh7ade-page-LeftSide-CreatedByWithImage">
          <img className = "sh7abe-page-LeftSide-CreatedByImage" src = {unchr}></img>
          <p className= "sh7ade-page-LeftSide-CreatedBy m-0">kousa created this campaign</p>
        </div>
        <div className="sh7ade-page-LeftSide-CreatedAtWithImage">
          <img className = "sh7abe-page-LeftSide-CreatedAtImage" src = {clock}></img>
          <p className= "sh7ade-page-LeftSide-CreatedAt m-0">created on 12-12-2023</p>
        </div>
        <p className= "sh7ade-page-LeftSide-Description">WeRise is a 100% Lebanese startup funded and created by Lebanese youths. If you'd like to help us grow, you can tip us here. Thank you!</p>
      </div>  

      <div className = "sh7ade-page-DonationForm shadow-lg">
        <h1 className = "sh7abe-page-EnterDonation-Text">Enter your Donation</h1>
        <p className= "sh7ade-page-Text-Form">WeRise is a 100% Lebanese startup funded and created by Lebanese youths. If you'd like to help us grow, you can tip us here. Thank you!</p>
        <div className="sh7ade-page-ThankYouAndAmount">
          <p>Thank you for including an amount of:</p>
          <div className="sh7ade-page-input">
            <input type="number" placeholder=" 0.0$" onChange={(e) => setInputValue(e.target.value)}></input>
          </div>
        </div>
        <button className="sh7ade-page-SubmitButton" onClick={checkBalance}>Submit Donation</button>
      </div>  
    </div>
    </>
  );
}

export default DonationPage

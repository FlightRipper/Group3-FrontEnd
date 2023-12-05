import React from 'react'
import CampaignImage from "../campaign.jpg"
import "../AdminDashboard.css";
import axios from 'axios';


const CampaignOngoingCard = ({data}) => {



  return (
       <div className="campaign-request-card p-0 rounded-4 d-flex flex-column my-3 no-gutters">
                <img src={`http://localhost:5001/uploads/${data.image}`} className="campaign-pic w-100 p-0 relative "></img>
                <div className="campaign-category">{data.category}</div>
                <h3 className="campaign-title h3 m-0 py-2 relative text-center">{data.title}</h3>
                <p className='px-3 py-1 campaign-description'> {data.description}</p>
                <p className='campaign-target text-center'>Target Amount: $ <span>{data.targetAmount}</span></p>
                <p className='campaign-owner text-center'>Created by: <span>{data.User.username}</span></p>
                <div className='approve-reject-buttons d-flex flex-row align-items-center justify-content-between px-2'>
                <button type="button" className="btn btn-primary approve-button px-5" >edit</button>
<button type="button" className="btn btn-primary reject-button px-5" >delete</button>
                </div>
            </div>
  )
}

export default CampaignOngoingCard


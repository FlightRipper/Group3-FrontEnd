import React from 'react'
import CampaignImage from "../campaign.jpg"
import "../AdminDashboard.css";



const CampaignRequestsCard = () => {
  return (
       <div className="campaign-request-card w-25 h-75 p-0 rounded-4 d-flex flex-column align-items-center no-gutters">
                <img src={CampaignImage} className="campaign-pic w-100 p-0 relative "></img>
                <div className="campaign-category">Medical</div>
                <h3 className="campaign-title h3 m-0 py-2 relative text-center">Help us grow</h3>
            </div>
  )
}

export default CampaignRequestsCard

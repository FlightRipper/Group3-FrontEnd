import React, { useState } from 'react';
import EditCampaignsDashboard from './EditCampaignsDashboard.jsx';
import axios from 'axios';

const OngoingCampaignsCard = ({data}) => {
 const [showPopup, setShowPopup] = useState(false);

 const handleEdit = async () => {
  setShowPopup(true);
 };

 const ondelete = async () => {
  try {
    const response = await axios.delete(`http://localhost:5000/campaigns/${data.id}`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Handle success case here
  } catch (error) {
    console.error('There was an error!', error);
  }
 };


 const handleUpdate = async (updatedCampaign) => {
  try {
    const response = await axios.patch(`http://localhost:5000/campaigns/${data.id}`, updatedCampaign);
    if (response.status === 200) {
      // Update the state with the updated campaign
      setData(updatedCampaign);
    }
  } catch (error) {
    console.error(error);
  }
 };

 return (
  <div className="campaign-request-card p-0 rounded-4 d-flex flex-column my-3 no-gutters">
     <img src={`http://localhost:5000/uploads/${data.image}`} className="campaign-pic w-100 p-0 relative "></img>
     <div className="campaign-category">{data.category}</div>
     <h3 className="campaign-title h3 m-0 py-2 relative text-center">{data.title}</h3>
     <p className='px-3 py-1 campaign-description'> {data.description}</p>
     <p className='campaign-target text-center'>Target Amount: $ <span>{data.targetAmount}</span></p>
     <p className='campaign-owner text-center'>Created by: <span>{data.User.username}</span></p>
     <div className='approve-reject-buttons d-flex flex-row align-items-center justify-content-between px-2'>
      <button type="button" className="btn btn-primary approve-button px-5" onClick={handleEdit}>edit</button>
      <button type="button" className="btn btn-primary reject-button px-5" onClick={ondelete}>delete</button>
    </div>
    {showPopup && (
      <div className="modal w-50 m-auto" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="modal-content">
          <EditCampaignsDashboard data={data} initialData={data} onUpdate={handleUpdate} onClose={() => setShowPopup(false)} />
        </div>
      </div>
    )}
  </div>
 )
}

export default OngoingCampaignsCard;

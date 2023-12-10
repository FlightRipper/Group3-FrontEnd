import React, { useState } from 'react';
import axios from 'axios';
import "./CampaignEditForm.css"
import logo from "../../admin/10.png"
const EditCampaignsDashboard = ({ onClose ,data}) => {
 const [campaign, setCampaign] = useState({
 category: "",
 title: "",
 description: "",
 targetAmount: "",
 });
 console.log(campaign)

 const handleChange = (e) => {
 setCampaign({
   ...campaign,
   [e.target.name]: e.target.value
 });
 };

 const handleUpdate = async (e) => {
 e.preventDefault();
 try {
   const response = await axios.patch(
     `http://localhost:5001/campaigns/${data.id}`,
     campaign
   );
   console.log(response.data);
   onClose();
 } catch (error) {
   console.log(error);
 }
 };

 return (
 <div className='Whole-campaign-edit-form'>
  <img src={logo} />
   <form onSubmit={handleUpdate} className='Campaign-Edit-Form'>
     <div className="form-group">
       <label htmlFor="category">Campaign Category:</label>
       <input
         type="text"
         id="category"
         name="category"
         value={campaign.category}
         onChange={handleChange}
       />
     </div>
     <div className="form-group">
       <label htmlFor="title">Campaign Title:</label>
       <input
         type="text"
         id="title"
         name="title"
         value={campaign.title}
         onChange={handleChange}
       />
     </div>
     <div className="form-group">
       <label htmlFor="description">Campaign Description:</label>
       <input
         type="text"
         id="description"
         name="description"
         value={campaign.description}
         onChange={handleChange}
       />
     </div>
     <div className="form-group">
       <label htmlFor="targetAmount">Campaign Target Amount:</label>
       <input
         type="number"
         id="targetAmount"
         name="targetAmount"
         value={campaign.targetAmount}
         onChange={handleChange}
       />
     </div>
     <button type="submit" className="btn btn-primary">Submit</button>
     <button type="button" onClick={onClose}>Close</button>
   </form>

 </div>
 );
}

export default EditCampaignsDashboard;

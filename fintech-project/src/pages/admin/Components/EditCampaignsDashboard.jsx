import React, { useState } from 'react';
import axios from 'axios';
import '../../custom.scss';
import { useAuthContext } from '../../../hooks/useAuthContext';
import SpinnerLoadingSmalle from '../../../components/SpinnerLoadingSmalle';


const EditCampaignsDashboard = ({ onClose, data }) => {
  const { user } = useAuthContext();
  const [messages, setmessages] = useState('');
  const [loading , setLoading] = useState(false);


  const [campaign, setCampaign] = useState({
    category: '',
    title: '',
    description: '',
    targetAmount: '',
  });


  const handleChange = (e) => {
    setCampaign({
      ...campaign,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.patch(
        `http://localhost:5000/campaigns/${data.id}`,
        campaign,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setmessages('Your campaign has been edited successfully')
      console.log(response.data);
      setLoading(false)
      onClose();
    } catch (error) {
      console.log(error);
      setmessages('An error has occurred while editing the campaign')
      setLoading(false)
    }
  };

  return (
    <>
    {loading ? <SpinnerLoadingSmalle /> : (
    <div className="Whole-campaign-edit-form">
      <h1 className='m-5 text-info'>Edit Campaign</h1>
      <form onSubmit={handleUpdate} className="Campaign-Edit-Form d-flex align-items-baseline">
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
        <div
            className={
              messages === 'your campaign has been edited successfully'
                ? 'text-success'
                : 'text-danger'
            }
          >
            {messages}
          </div>
        <div className='d-flex justify-content-center align-items-center m-5 gap-2'>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className='btn btn-danger' type="button" onClick={onClose}>
          Close
        </button>
        </div>
      </form>
    </div>
    )}
    </>
  );
};

export default EditCampaignsDashboard;

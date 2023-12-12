import React, { useState } from 'react';
import axios from 'axios';
import '@mantine/notifications/styles.css';
import { Dropdown } from 'react-bootstrap';
import './StartCampaign.css';
import { useAuthContext } from '../hooks/useAuthContext';
import jwt_decode from 'jwt-decode'

export default function StartCampaignPage() {
    const [title, setTitle] = useState(''); //count for the title
    const [category, setCategory] = useState('Select a Category');
    const [description, setDescription] = useState(''); //count for the description
    const [targetAmount, setTargetAmount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [image, setImage] = useState('');
    const { user } = useAuthContext()
    const decodedToken = jwt_decode(user.token);
    
    const maxDescription = 255; //max description count

    const handleCategory = (eventKey) => {
        setCategory(eventKey);
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('targetAmount', targetAmount);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('image', image);

    try {
      const response = await axios.post(
        `http://localhost:5000/campaigns/${decodedToken.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="StartCampaignPageContainerkousa">
      <form className="StartCampaignPageContainer" onSubmit={handleSubmit}>
        <h1 className="StartCampaign-Title">Start A Campaign</h1>
        <p className="StartCampaign-GeneralInfo">
          Kindly fill the below forms and upload required documentation to start
          a campaign. By starting a campaign you agree on our Terms and
          Conditions and Privacy Policy. You also declare that information
          provided is true and correct and you understand that an uncomplete
          submission or a willful dishonesty will lead to banning your from
          using fundahope's services. As a reminder fundahope's fees are 5% from
          each donation you receive, the payment gateway fee is $0.15+2.4% for
          donations from Lebanese cards and $0.15+3.5% for donations from
          foreign cards.You will be asked to input your banking details when you
          request your first withdrawal in your account page.
        </p>
        <h2 className="StartCampaign-CampaignInformation-TItle">
          Campaign Information
        </h2>
        <div className="StartCampaign-AllCampaignInfo">
          <div className="StartCampaign-EnterGoalContainerCombo">
            <div className="StartCampaign-EnterGoalContainer">
              <p>Enter Your Goal Here</p>
              <input
                type="number"
                placeholder="Example: 20000$"
                required
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
              ></input>
            </div>
            <div className="StartCampaign-CampaignTitleContainer">
              <p>Enter Your Title Here</p>
              <input
                type="text"
                required={true}
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="StartCampaign-ImageFileCombo">
            <div className="StartCampaign-ImageFile">
              <p>Upload Image Here</p>
              <input type='file' name="file" required={true} onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <div className="StartCampaign-Category dropdown">
              <p>Select Category Option</p>
                  
              <Dropdown onSelect={handleCategory}  className="StartCampaign-Category-Button" >
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdownCategory"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {category}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Animal">Animal</Dropdown.Item>
                  <Dropdown.Item eventKey="Medical">Medical</Dropdown.Item>
                  <Dropdown.Item eventKey="Education">Education</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="StartCampaign-DateCombo">
            <div className="StartCampaign-Date">
              <p className="StartCampaign-DateEnd">Campaign Funding Start Date</p>
              <input
                type="date"
                className="StartCampaign-DateInput"
                required={true}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="StartCampaign-Date">
              <p className="StartCampaign-DateEnd">Campaign Funding End Date</p>
              <input
                type="date"
                className="StartCampaign-DateInput"
                required={true}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="StartCampaign-Description">
              <p className="StartCampaign-Description-CampaignDescription">
                Campaign description
              </p>
              <textarea
                className="StartCampaign-Description-TextArea"
                maxLength={maxDescription}
                required={true}
                placeholder="Add Description Here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <span> {} </span>
            </div>
          </div>
          <button className="StartCampaign-Submit mb-4"> Submit Request</button>
        </div>
      </form>
    </div>
  );
}

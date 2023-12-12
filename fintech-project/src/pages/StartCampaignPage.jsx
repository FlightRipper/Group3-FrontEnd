import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { notifications } from '@mantine/notifications';
import axios from 'axios';
import '@mantine/notifications/styles.css';
import { Dropdown } from 'react-bootstrap';
import './StartCampaign.css'



export default function StartCampaignPage(){

    const [file, setFile] = useState(null);
    const [inputValue, setInputValue] = useState(''); //count for the title
    const [DescriptionValue, setDescriptionValue] = useState(''); //count for the description
    const maxDescription = 255; //max description count
    const [category, setCategory] = useState('Select Category');
    const[goal, setGoal] = useState('');
    const[title, setTitle] = useState('');
    const[date, setDate] = useState('');
    const[description, setDescription] = useState('');
    
    const handleChange = (file) => {
        setFile(file);
        console.log(file);
    }

    const handleCategory = (eventKey) => {
        setCategory(eventKey);
    };

    const handleGoal = (eventKey) => {
        setGoal(eventKey);
        console.log(eventKey.target.value)
    };

    const handleTitle = (eventKey) => {
        setTitle(eventKey.target.value);
    };

    const handleDescription = (eventKey) => {
        setDate(eventKey.target.value);
    };

    const handleDate = (eventKey) => {
        setDescription(eventKey.target.value);
    };

    const maxLength = 50;
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setInputValue(result)
        handleTitle(event)
    }

    const handleDescriptionChange = (event) => {
        setDescriptionValue(event.target.value); 
        handleDescription(event)
    }

    const [kousa, setKousaValue] = useState('');

    const handleKousaChange = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
        setKousaValue(result);
    };

    const handleSubmit = (event) => {
        if (category === 'Select Category') {
          event.preventDefault();
          notifications.show({
            title: 'Missing Field',
            message: 'Please select a category',
            color: "red",
            style: { backgroundColor: 'white' },
            })
        }
    };


    return (
        <div className="StartCampaignPageContainerkousa">
            <form className="StartCampaignPageContainer" onSubmit={handleSubmit}>
                <h1 className="StartCampaign-Title">Start A Campaign</h1>
                <p className="StartCampaign-GeneralInfo">Kindly fill the below forms and upload required documentation to start a campaign. By starting a campaign you agree on our Terms and Conditions and Privacy Policy. You also declare that information provided is true and correct and you understand that an uncomplete submission or a willful dishonesty will lead to banning your from using fundahope's services. As a reminder fundahope's fees are 5% from each donation you receive, the payment gateway fee is $0.15+2.4% for donations from Lebanese cards and $0.15+3.5% for donations from foreign cards.You will be asked to input your banking details when you request your first withdrawal in your account page.</p>
                <h2 className="StartCampaign-CampaignInformation-TItle">Campaign Information</h2>
                <div className="StartCampaign-AllCampaignInfo">
                    <div className="StartCampaign-EnterGoalContainerCombo">
                        <div className="StartCampaign-EnterGoalContainer">
                            <p>Enter Your Goal Here</p>
                            <input type="number" placeholder="Example: 20000$" onChange={handleGoal} required></input>
                        </div>
                        <div className="StartCampaign-CampaignTitleContainer">
                            <p>Enter Your Title Here</p>
                            <input type="text" value={inputValue} onChange={handleInputChange} maxLength={maxLength} required = {true} placeholder="Title"></input>
                            <span> {maxLength - inputValue.length} </span>
                        </div>
                    </div>
                    <div className="StartCampaign-ImageFileCombo">
                        <div className="StartCampaign-ImageFile">   
                            <p>Upload Image Here</p>        
                            <FileUploader
                            multiple={false}
                            handleChange={handleChange}
                            name="file"
                            required={true}
                            />
                        </div>
                        <div className="StartCampaign-Category dropdown">
                            <p>Select Category Option</p>
                            <Dropdown onSelect={handleCategory} className="StartCampaign-Category-Button">
                            <Dropdown.Toggle variant="secondary" id="dropdownCategory">
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
                            <p className="StartCampaign-DateEnd">Campaign Funding End Date</p>
                            <input type="date" className="StartCampaign-DateInput" required = {true} onChange={handleDate}/>
                        </div>
                        <div className="StartCampaign-Description">
                            <p className="StartCampaign-Description-CampaignDescription">Campaign description</p>
                            <textarea className="StartCampaign-Description-TextArea" onChange={handleDescriptionChange} maxLength={maxDescription} required={true} placeholder="Add Description Here"></textarea>
                            <span> {maxDescription - DescriptionValue.length} </span>
                        </div>
                    </div>
                    <button className="StartCampaign-Submit mb-4"> Submit Request</button>
                </div>
            </form>
        </div>
    );
}

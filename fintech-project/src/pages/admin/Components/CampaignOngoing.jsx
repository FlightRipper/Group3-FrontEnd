import "../AdminDashboard.css";
import Dropdown from "react-bootstrap/Dropdown";
import CampaignOngoingCard from "./CampaignOngoingCard.jsx";
import axios from "axios"
import React, { useEffect, useState } from "react";

const CampaignOngoing = () => {

const [campaign, setcampaign]=useState(null);
const [selectedCategory, setSelectedCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

useEffect(()=>{

const fetchcampaign=async()=>{
  try{
    const response = await axios.get(
      "http://localhost:5001/campaigns/"
    );
const data = response.data;
setcampaign(data)
console.log(data)
  }
  catch(error){
    console.log(error);
    setcampaign(null)
  }
}
fetchcampaign();


},[])



const handleFilter=(category)=>{
  setSelectedCategory(category)
};

const handleDelete = async (deletedcampaignId) => {
  // Update the Admin state after deletion
  setcampaign((prevcampaign) => prevcampaign.filter((campaign) => campaign.id !== deletedcampaignId));
};




  return (
    <div className="w-100">
      <div className="dashboard-body w-100 h-100 d-flex row m-0 align-items-center justify-content-center">
        <div className="body-header w-100 d-flex align-items-center  justify-content-between column p-3 m-0 sticky-top">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=> handleFilter("animal")}>Animal</Dropdown.Item>
              <Dropdown.Item onClick={()=> handleFilter("medical")}>Medical</Dropdown.Item>
              <Dropdown.Item onClick={()=> handleFilter("education")}>Education</Dropdown.Item>
              <Dropdown.Item onClick={()=> handleFilter("All")}>View All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="admin-search-div">
          <input type="text" className="admin-search px-3" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  style={{ color: 'white' }}/>
          </div>
        </div>
        <div className="body-content w-100 p-0 d-flex flex-wrap row justify-content-around align-items-center">
       
       

        {campaign &&
  campaign
    .filter((item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.isApproved &&
      (searchTerm === "" ||
        (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .map((item, index) => (
      <CampaignOngoingCard key={index} data={item} onDelete={handleDelete}/>
    ))}



        </div>
      </div>
    </div>
  );
};

export default CampaignOngoing;
﻿
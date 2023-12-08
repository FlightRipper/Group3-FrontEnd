import React from 'react'
import Navbar from '../components/NavbarWhite';
import HomeCampaignsCards from '../components/HomeCampaignsCards.jsx';
// import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignsPage = () => {

  const [campaign, setcampaign]=useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");



  const handleFilter=(category)=>{
    setSelectedCategory(category)
  };

  useEffect(()=>{

    const fetchcampaign=async()=>{
      try{
        const response = await axios.get(
          "http://localhost:5000/campaigns/"
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

  

  return (
    <div className="w-100 vh-100">
    <Navbar handleFilter={handleFilter}/>
    
    <div className='campaign-request-card-home-container d-flex flow-row justify-content-center align-items-center gap-5'>
    {campaign && campaign.filter((item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.isApproved
    ).map((item, index) => (
 <HomeCampaignsCards className="home-campaigns-cards" key={index} data={item} />
))}
      
    </div>
    
    </div>
  )
}

export default CampaignsPage

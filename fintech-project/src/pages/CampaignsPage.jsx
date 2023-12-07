import React from 'react'
import Navbar from '../components/NavbarWhite';
import i22 from './27.png';
import HomeCampaignsCards from '../components/HomeCampaignsCards.jsx';


const CampaignsPage = () => {
  return (
    <div className="w-100 vh-100">
    <Navbar/>
    <div className='campaign-request-card-home-container d-flex flow-row justify-content-center align-items-center gap-5'>
      <HomeCampaignsCards className="home-campaigns-cards"/>
      <HomeCampaignsCards className="home-campaigns-cards"/>
      <HomeCampaignsCards className="home-campaigns-cards"/>
    
    </div>
    </div>
  )
}

export default CampaignsPage

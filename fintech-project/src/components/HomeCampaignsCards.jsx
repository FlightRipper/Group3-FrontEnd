import React from 'react'
import i22 from '../pages/27.png'


const HomeCampaignsCards = () => {
  return (
    <>
    <div className="campaign-request-card-home p-0 rounded-4 d-flex flex-column">
        <img src={i22} className="campaign-pic-home w-100 p-0 relative "></img>
        <div className="campaign-category-home p-1">animal</div>
        <h3 className="campaign-title-home h3 m-0 py-2 relative text-center">Mehieddine</h3>
        <p className='px-3 py-1 campaign-description-home text-center'> abnormal fitching</p>
        <div className='mt-auto mb-4 d-flex flex-column align-items-center justify-content-center'>
          <p className='campaign-target-home text-center'>Target Amount: $ <span>200</span></p>
          <input className='mb-2' type='range' min='0' max='20' value="8" disabled></input>
          <p className='campaign-owner-home text-center'>Created by: <span>mehio1</span></p>
          <button type="button" className="btn btn-primary donate-button-home px-5">Donate Now</button>
        </div>
      </div>
      </>
  )
}

export default HomeCampaignsCards

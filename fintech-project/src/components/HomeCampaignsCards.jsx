import React, { useEffect, useState } from 'react'
import i22 from '../pages/27.png'
import axios from 'axios'




const HomeCampaignsCards = ({data}) => {

  // const handleDonate=async()=>{
  //   try{
  //     await 
  //   } catch(error){


  //   }
  // }

  return (
    <>
    <div className="campaign-request-card-home p-0 rounded-4 d-flex flex-column">
        <img src={`http://localhost:5000/uploads/${data.image}`} className="campaign-pic-home w-100 p-0 relative "></img>
        <div className="campaign-category-home p-1">{data.category}</div>
        <h3 className="campaign-title-home h3 m-0 p-2 relative text-center">{data.title}</h3>
        <p className='px-3 py-1 campaign-description-home text-center'>{data.description}</p>
        <div className='mt-auto mb-4 d-flex flex-column align-items-center justify-content-center'>
          <p className='campaign-target-home text-center'>Target Amount: $ <span>{data.targetAmount}</span></p>
          <input className='mb-2' type='range' min='0' max={data.targetAmount} value={data.totalDonations} disabled></input>
          <p className='campaign-owner-home text-center'>Created by: <span>{data.User.username}</span></p>
          <button type="button" className="btn btn-primary donate-button-home px-5">Donate Now</button>
        </div>
      </div>
      </>
  )
}

export default HomeCampaignsCards
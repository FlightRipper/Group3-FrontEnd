import React from 'react'
import i20 from './25.png'
import Navbar from '../components/Navbar'


const home = () => {
  return (
    <div>
      <img src={i20} alt="" className='w-100 h-100 vh-100 position-absolute custom-big-image-home'/>
      <div className='custom-div-homepage'>
      <h1><strong>We Rise</strong></h1>
      <h3>Raise and donate funds for what you care about</h3>
      </div>
    </div>
  )
}

export default home
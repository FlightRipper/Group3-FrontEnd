import React from 'react';
import i20 from './25.png';
import i21 from './26.png';
import i22 from './27.png';
import './custom.scss';
import HowItWorksPage from './HowItWorksPage';
import CampaignsPage from './CampaignsPage'
import i105 from './105.png'
import { useAuthContext } from '../hooks/useAuthContext';


const home = () => {
  const { user } = useAuthContext()

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={i20}
              className="w-100 h-100 vh-100 custom-big-image-home"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={i22}
              className="w-100 h-100 vh-100 custom-big-image-home"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={i21}
              className="w-100 h-100 vh-100 custom-big-image-home"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon d-none"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon d-none"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="custom-div-homepage">
          <h1 className=''>
            <strong>We Rise</strong>
          </h1>
          <h3>Raise and donate funds for what you care about</h3>
        </div>
      </div>
      <div className='d-flex m-2 justify-content-center align-items-center flex-column gap-5 m-5 vh-50'>
      <h2><strong> Ready To Start Your Joureny?</strong></h2>
      <div className='d-flex gap-5 w-75'>
        <button className='btn-primary w-50 rounded p-2 text-white'>Start your Campaign</button>
        <button className='btn-primary w-50 rounded p-2 text-white'>Donte Now</button>
        </div>
      <h5>________________________________________________________________</h5>
      </div>
      <CampaignsPage />
      <div className='position-relative'>
        <img src={i105} alt="" className='w-100' />
        <div className='position-absolute top-50 center  start-50 translate-middle text-center w-100 h-50 md-h-0'>
        <h1 className='text-white'><strong>Since December 2023</strong></h1>
        <h4 className='text-white'><span className='text-info'>We Rise</span> is growing fast thanks to the trust of the<span className='text-info'> fundraisers' </span></h4>
        </div>
      </div>
      <HowItWorksPage/>
    </div>
  );
};

export default home;

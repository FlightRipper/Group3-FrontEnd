import React from 'react';
import i20 from './25.png';
import i21 from './26.png';
import i22 from './27.png';
import './custom.scss';
import HowItWorksPage from './HowItWorksPage';
import axios from 'axios';


const home = () => {

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
            className="carousel-control-prev-icon"
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
            className="carousel-control-next-icon"
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
      <HowItWorksPage/>
    </div>
  );
};

export default home;

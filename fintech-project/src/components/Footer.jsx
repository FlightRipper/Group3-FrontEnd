import React from 'react'
import CampaignsPage from '../pages/CampaignsPage.jsx'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
<footer className="text-center text-lg-start bg-body-tertiary text-muted" >
  

  <section className="pt-3 pb-3" style={{ backgroundColor: 'rgba(19, 79, 80, 1)',  color: 'white'}}>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="bi bi-gem me-3"></i>We Rise
          </h6>
          <p>
           Raise and Donate Funds for What You Care About<br/>
           Feel free to connected with us on social networks

          </p>
        </div>

       
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to={"/campaigns"} className="text-reset">Ongoing Campaigns</Link>
          </p>
          <p>
            <Link to={"/howitworks"} className="text-reset">How It Works</Link>
          </p>
          
        </div>
    
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="bi bi-house-door-fill me-3"></i> Beirut, Lebanon</p>
          <p>
            <i className="bi bi-envelope-fill me-3"></i>
            info@example.com
          </p>
          <p><i className="bi bi-discord me-3"></i> <a className="text-reset" href="https://discord.com/channels/1179410034111811597/1179416812979503145" target="_blank">Discord Us</a></p>
          <p><i className="bi bi-telephone me-3"></i> + 961 81 99 100 4</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    Â© 2023 Copyright:&nbsp;&nbsp;
    <a className="text-reset fw-bold " href="#">FintechArmy.com</a>
  </div>
</footer>
    </>
  )
}

export default Footer

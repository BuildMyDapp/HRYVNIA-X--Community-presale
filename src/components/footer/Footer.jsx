import React from 'react'
import "./footer.css";
import twitter from '../../images/twitter.png';
const Footer = () => {
    return (
        <div className="footer mt-5">
              <div className="container">
                  <div className="row ">
                      <div className="col-lg-12 mt-5">
                         
                          <h3 className="text-center text-white mt-4">Connect With Us</h3>
                           <div className="text-center d-flex justify-content-center align-items-center">
                              <img  className="me-2" src={twitter} width="30" height="30" alt="" />
                              <h5 className="text-white">Etherscan</h5>
                              <img className="ms-2" src={twitter} width="30" height="30" alt="" />

                           </div>
                      </div>
                      <hr  style={{color:"white",marginTop:"2rem",height:'0.1rem',opacity:'0.5'}}/>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <p className="text-center text-white">© 2021 Copyright by hryvnia-x.org. All rights reserved.</p>
                      </div>
                  </div>
              </div>
        </div>
    )
}

export default Footer

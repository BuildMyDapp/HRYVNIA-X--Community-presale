import React, { useEffect } from "react";
import "./footer.css";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import discord from "../../images/discord.png";
import reddit from "../../images/reddit.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);


  return (
    <div className="footer mt-5" id="footer">
       
        
      <div className="container">
        <div className="row ">
         
          <div className="col-lg-12 mt-5">
            <h3 className="text-center text-white mt-4"  data-aos="fade-right">Connect With Us</h3>
            <div className="text-center d-flex justify-content-center align-items-center" >
              <a href="https://www.facebook.com/"    >
                <img
                  className="me-2"
                  src={twitter}
                  width="30"
                  height="30"
                  alt=""
                />
              </a>
              

              <h5 className="text-white me-2" data-aos="zoom-in"><a href="https://bscscan.com/token/0xc63d45be76649f295b185d88bfe010145f4590ba" target="_blank">BscScan</a> </h5>
              {/* <a href="https://www.facebook.com/"   >
                <img
                  className="ms-2"
                  className="discord"
                  src={discord}
                  width="30"
                  height="30"
                  alt=""
                />
              </a> */}

              <a href="https://www.facebook.com/"   >
                <img
                  className="ms-2"
                  src={reddit}
                  width="30"
                  height="30"
                  alt=""
                />
              </a>
            </div>
          </div>
          <hr
            style={{
              color: "white",
              marginTop: "2rem",
              height: "0.1rem",
              opacity: "0.5",
            }}
          />
        </div>
        <div className="row  " >
          <div className="col-lg-12" >
            <p className="text-lg-center footerp text-white"  >
              © {new Date().getFullYear()} Copyright by hryvnia-x.org. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

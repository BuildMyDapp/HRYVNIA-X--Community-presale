import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./info.css";
const Info = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <div className="info mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12   my-5">
            <p className=" text-lg-center mt-5  ms-lg-5 "   data-aos="zoom-in">
              Although HRYVNIA-X is a community driven DeFi Ecosystem and not a
              registered digital currency, always make sure that you are in
              compliance with local laws and regulations before you make any
              purchase. Cryptocurrencies are not legal tender and are not
              investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

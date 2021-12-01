import React,{useEffect} from "react";

import "./tokenomics.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Tokenomics = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div className="tokenomics">
      <div className="container">
        <div className="bgtextToko">
          <h1 className="text-center mt-0 text-white" data-aos='fade-right'>TOKENOMICS</h1>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 mt-5 tokenDiv" data-aos='fade-right'>
            <h5 className="text-center text-white p-2">Token Name HRYVNIA-X</h5>
          </div>
          <div className="col-lg-12 mt-3 tokenDiv" data-aos='fade-right'>
            <h5 className="text-center text-white p-2">Token Symbol - HRYX</h5>
          </div>
          <div className="col-lg-12 mt-3 tokenDiv" data-aos='fade-right'>
            <h5 className="text-center text-white p-2">Token Decimal - 18</h5>
          </div>
          <div className="col-lg-12 mt-3 tokenDiv" data-aos='fade-right'>
            <h5 className="text-center text-white p-2">
              Token Supply - 440,000,000
            </h5>
          </div>
          {/* <div className="col-lg-12 mt-3 tokenDiv" data-aos='fade-right'>
            <h5 className="text-center text-white p-2">
              Hard Cap - 15,000 BNB
            </h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

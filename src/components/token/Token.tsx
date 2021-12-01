import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./token.css";
const Token = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <div className="token">
      <div className="container my-5 ">
        <div className="row  ">
          <div className="bgtext">
            <h1 className="text-center mt-5   " data-aos='fade-right'>TOKENS</h1>
          </div>

          <p className="text-center mt-5">Breakdown of our token Recipients</p>
          <div className="tokens col-lg-7 px-4 my-5"  data-aos='fade-right'>
            <h2 className="mt-3">Tokens Allocated for Manual Burn</h2>
            <p>
              20.51% <span>(Lockup)</span>
            </p>
          </div>
          <div className="tokens col-lg-7 px-4">
            <h2 className="mt-3">Tokens Allocated for Public Sale</h2>
            <p>
              10% <span>(Lockup)</span>
            </p>
          </div>

          <div className="row">
            <div className="tokens col-lg-4 px-4" data-aos='fade-right'>
              <h2 className="mt-3">Tokens Allocated for Private Sale</h2>
              <p>
                25.63% <span>(Lockup)</span>
              </p>
            </div>
            <div className="tokens col-lg-4 px-4" data-aos="fade-left">
              <h2 className="mt-3">Tokens Allocated for Seed</h2>
              <p>
                0.03% <span>(Lockup)</span>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="tokens col-lg-4 px-4" data-aos='fade-right'>
              <h2 className="mt-3">Tokens Allocated for Foundation</h2>
              <p>
                25.63% <span>(Lockup)</span>
              </p>
            </div>
            <div className="tokens col-lg-4 px-4"data-aos='fade-left'>
              <h2 className="mt-3">Tokens Allocated for Team</h2>
              <p>
                12.82% <span>(Lockup)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;

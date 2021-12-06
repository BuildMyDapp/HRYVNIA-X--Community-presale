import React, { useEffect } from "react";
import "./main.css";
import { Card } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import {
  remainingTokenAsync,ethRaisedAsync
} from "../../redux/slices/web3ConnectSlice";

const Main = () => {

  

  const dispatch = useDispatch();

  const {   tokenRemaining,ethRaised ,web3} = useAppSelector((state) => state.web3Connect);
  console.log(   tokenRemaining,ethRaised);

  React.useEffect(() => {
    dispatch(remainingTokenAsync());
    dispatch(ethRaisedAsync())
   

  }, [web3]);
  


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="main">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mt-3">
            <div className="tokenRemaining" data-aos="fade-right">
              <h1 className="text-center text-white">Tokens Remaining</h1>
              <p className="text-start text-white    text-center"> { tokenRemaining ? tokenRemaining/10e17:0}</p>
            </div>
          </div>
          <div className="col-lg-6   mt-3">
            <div className="eth" data-aos="fade-left">
              <h1 className="text-center text-white">BNB Raised</h1>
              <p className="text-start text-white    text-center ">{ethRaised? ethRaised/10e17:0}</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="text-center my-5" data-aos="zoom-in">
            Three simple functions occur during each trade
          </h3>
          <div className="col-lg-4 col-md-4"  >
            <Card
              style={{
                background: "#5C80E6",
                padding: "25px",
                height: "200px",
              }}
              data-aos="fade-right" >
              <h3 className="text-start text-white">LP Acquisition</h3>
              <h5 className="text-start text-white mt-4">
                4% goes to liquidity pool on each transaction to maintain
                healthy liquidity
              </h5>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4">
            <Card
              style={{
                background: "#5C80E6",
                padding: "25px",
                height: "200px",
              }}
              data-aos="fade-up" >
              <h3 className="text-start text-white">Reflection</h3>
              <h5 className="text-start text-white mt-4">
                1% of every transaction (buy/sell/transfer) is redistributed to
                all holders.
              </h5>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4">
            <Card
              style={{
                background: "#5C80E6",
                padding: "25px",
                height: "200px",
              }}
              data-aos="fade-left" >
              <h3 className="text-start text-white">Charity</h3>
              <h5 className="text-start text-white mt-4">1% for charities</h5>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

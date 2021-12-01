import React from "react";
import "./hero.css";
import logo from "../../images/logo.png";
import Modal from "@material-ui/core/Modal";
import ConnectModal from "../model/connectModal";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  maxContributionAsync,
  minimumContributionAsync,
  rateAsync,
} from "../../redux/slices/web3ConnectSlice";
import BuyModel from "../model/BuyModel";
const Hero = () => {
  const [openConnect, setOpenConnect] = React.useState(false);
  console.log(openConnect);
  const dispatch = useAppDispatch();

  const { web3, maxValue, minValue } = useAppSelector(
    (state) => state.web3Connect
  );

  const handleConnectOpen = () => {
    setOpenConnect(true);
  };

  const handleConnectClose = () => {
    setOpenConnect(false);
  };

  React.useEffect(() => {
    dispatch(maxContributionAsync());
    dispatch(minimumContributionAsync());
    dispatch(rateAsync());
  }, [web3]);
  
  React.useEffect(()=>
  {
    setOpenConnect(false);
    
  },[])

  return (
    <div className="heroSection">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 mt-5  order-2 order-lg-1">
            <h1 className=" text-white"> Welcome to HRYVNIA-X Community!</h1>
            <p className="text-white">
              The HRYVNIA-X is a decentralized DeFi Token launched on Binance
              Smart Chain, community focused. The total supply of „HRYVNIA-X
              TOKENS“ is 440,000,000 HRYX, it is unchanged.
            </p>
            <div className="text-lg-start text-center">
            {web3 ? (
                  <>
                    <button
                      className="btn   connectBtnHero"
                      onClick={handleConnectOpen}
                    >
                      {" "}
                      Buy Now
                    </button>
                    <Modal
                      open={openConnect}
                      onClose={handleConnectClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <BuyModel   />
                    </Modal>
                  </>
                ) : (
                  <>
                   <button
                        className="btn   connectBtnHero"
                      onClick={handleConnectOpen}
                    >
                      {" "}
                      CONNECT WALLET
                    </button>
                    <Modal
                      open={openConnect}
                      onClose={handleConnectClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <ConnectModal setOpenConnect={setOpenConnect} />
                    </Modal>
                  </>
                )}
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="text-lg-end text-center mt-lg-5">
              <img src={logo} alt="" width="300 " height="350" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

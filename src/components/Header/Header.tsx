import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import Modal from "@material-ui/core/Modal";
import ConnectModal from "../model/connectModal";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import BuyModel from "../model/BuyModel";
import {
  maxContributionAsync,
  minimumContributionAsync,
  rateAsync,
} from "../../redux/slices/web3ConnectSlice";
const Header = () => {
  const dispatch = useAppDispatch();

  const { web3, maxValue, minValue } = useAppSelector(
    (state) => state.web3Connect
  );

  const [openConnect, setOpenConnect] = React.useState(false);

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

  return (
    <div>
      <nav className="navbar navbar-expand-lg mainNavbar ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width="60" height="60" alt="" />
          </a>
          <button
            className="navbar-toggler customToggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link ms-3 ms-lg-0" href="#">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item ms-3">
                {/* <a href="" classNameName="nav-link connectWallet">    CONNECT WALLET</a> */}
                {web3 ? (
                  <>
                    <button
                      className="btn nav-link connectWallet"
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
                      className="btn nav-link connectWallet"
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
                 
              </li>
            </ul>
          </div>
        </div>
      </nav>
       
    </div>
  );
};

export default Header;

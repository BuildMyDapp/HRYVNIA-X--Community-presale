import React from "react";
import "./header.css";
import logo from "../../images/logo.png";
import Modal from "@material-ui/core/Modal";
import ConnectModal from "../model/connectModal";
const Header = () => {
  const [openConnect, setOpenConnect] = React.useState(false);

  const handleConnectOpen = () => {
    setOpenConnect(true);
  };

  const handleConnectClose = ( ) => {
    setOpenConnect(false);
  };
  return (
    <div>
      {openConnect && (
        <Modal
           open={handleConnectOpen}
          onClose={handleConnectClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ConnectModal />
        </Modal>
      )}
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
                <button
                  className="btn nav-link connectWallet"
                  onClick={handleConnectOpen}
                >
                  {" "}
                  CONNECT WALLET
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

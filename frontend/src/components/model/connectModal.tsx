import React, { useEffect, useCallback, useState } from "react";

import "./connectModal.css";
import { makeStyles } from "@material-ui/core/styles";
// import QRCode from "react-qr-code";
import metaIcon from "../../images/metamask.png";
import walletIcon from "../../images/wallet.png";



// import {
//   loadBlockchain,
//   loadWalletConnect,
// } from "../redux/slices/web3ConnectSlice";
// import { useAppDispatch, useAppSelector } from "../redux/store";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 355,
    backgroundColor: theme.palette.background.default,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px 30px 30px 30px",
    '@media (max-width: 420px)': {
      width: '370px',
      height: '350px'
    },

    '@media (max-width: 380px)': {
      width: '330px',
      height: '360px'
    },
  },
}));

type Props = {
  setOpenConnect: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConnectModal: React.FC<Props> = ({ setOpenConnect  }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  // const dispatch = useAppDispatch();

  // const web3 = useAppSelector((state) => state.web3Connect.web3);
  // console.log("web3>>>" , web3)
  // const handleBlockchain = () => {
  //   dispatch(loadBlockchain());
  //   setOpenConnect(false);
  // };

  // const handleWalletConnect = () => {
  //   dispatch(loadWalletConnect());
  //   setOpenConnect(false);
  // };

  return (
    <div>
      <>
        <div style={modalStyle} className={classes.paper}>
          <>
            <div style={modalStyle} className={classes.paper}>
              <>
                <button
                  // onClick={() => handleBlockchain()}
                  className="metamask-btn"
                >
                  <img src={metaIcon} alt="icon" className="metamask-btn-img" />
                 <h3>Meta Mask</h3>
                 <p>Connect to your Metamask Wallet</p> 
                </button>

                <button
                  // onClick={() => handleWalletConnect()}
                  className="trustwallet-btn"
                >
                  <img
                    src={walletIcon}
                    alt="icon"
                    className="trustwallet-btn-img"
                  />
                
                  <h4>  Wallet Connect</h4>
                 <p>Scan with   Wallet Connect to Connect</p> 
                </button>
              </>
            </div>
          </>
        </div>
      </>
    </div>
  );
};

export default ConnectModal;

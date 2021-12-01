import React, { useEffect, useCallback, useState } from "react";
import "./modal.css";
import { makeStyles } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import TextField from "@material-ui/core/TextField";
import Logo from "../images/GUBBO-pdfpng.png";
import { useDispatch } from "react-redux";
import {
  maxContributionAsync,
  minimumContributionAsync,
  rateAsync,
  buyTokensAsync,
} from "../../redux/slices/web3ConnectSlice";

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
    width: 390,
    height: 370,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px 30px 30px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textField: {
    width: "100%",
  },
  btn: {
    background: "#1077b3",
    borderRadius: "20px",
    color: "white",
    width: "100%",
    padding: "10px 10px",
    fontSize: "22px",
    marginTop: "10px",
    cursor: "pointer",
  },
}));



const BuyModel = () => {
  const [etherAmount, setEtheAmount] = useState(" ");
  const [rate, setRate] = useState("");
  const dispatch = useDispatch();

  const { returnRate, minValue, maxValue , web3 } = useAppSelector((state) => state.web3Connect);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleEthAmountAndRate = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEtheAmount(e.target.value);
    dispatch(rateAsync());
  };

  const onSubmit = async () => {
    try {
     const userAmount =  Number(etherAmount) * 10e17
      //etherAmount * 10e17;
      //pass amount in parameter of this function
       dispatch(buyTokensAsync({
         amount : userAmount
       }));
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    dispatch(maxContributionAsync());
    dispatch(minimumContributionAsync())
    setRate(returnRate);

  }, [web3]);
  
  return (
    <div>
      <>
        <div style={modalStyle} className={classes.paper}>
          <h5 className="maga-para" style={{ color: "black" }}>
            {" "}
            1 BNB ={returnRate} Gubbo{" "}
          </h5>
          {/* <img src={Logo} className="modal-img modal-rotate" /> */}
          {Number(etherAmount) >= 0.1 ? (
            <h5 className="maga-cal" style={{ color: "black" }}>
              {rate
                ? (
                    (Math.abs(Number(etherAmount)) * 10e17) /
                    (10e17 / Number(rate))
                  )
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : 0}{" "}
              Gubbo{" "}
            </h5>
          ) : (
            <h5 className="maga-cal" style={{ color: "black" }}>
              Minimum {minValue / 10e17} bnb required{" "}
            </h5>
          )}
          <TextField
            className="text-field"
            label="Enter BNB"
            value={etherAmount}
            onChange={(e) => handleEthAmountAndRate(e)}
          />
          {Number(etherAmount) > minValue / 10e17 &&
          Number(etherAmount) < maxValue / 10e17 ? (
            <button className="buy-btn" onClick={onSubmit}>
              Buy Now
            </button>
          ) : (
            <button className="buy-btn-disabled" disabled>
              Buy Now
            </button>
          )}
        </div>
      </>
    </div>
  );
};

export default BuyModel;

import React ,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Snackbar } from "@material-ui/core";
  import { Alert } from "@mui/material";
import {Header,Hero,Main,Footer,Token,Tokenomics,Info ,Timer} from './components/exportComponent';
import { useAppSelector } from "./redux/store";


function App() {

  const [showToast, setShowToast] = useState(false);
  const { web3, web3LoadingErrorMessage } = useAppSelector(
    (state) => state.web3Connect
  );


  
  useEffect(() => {
    if (web3LoadingErrorMessage) {
      setShowToast(true);
    }
    setTimeout(() => {
      setShowToast(false);
      console.log("running");
    }, 6000);
  }, [web3LoadingErrorMessage]);
  return (
    <div  >
       {showToast ? (
          <div>
            <Snackbar open={showToast} autoHideDuration={3000}>
              <Alert severity="error" sx={{ width: "100%" }}>
                Please Connect to Binance Network
              </Alert>
            </Snackbar>
          </div>
        ) : null}
       <Header/>
       <Hero/>
       <Timer/>
       <Main/>
       <Token/>
       <Tokenomics/>
       <Info/>
       <Footer/>
    </div>
  );
}

export default App;

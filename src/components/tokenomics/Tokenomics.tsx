import React from 'react'
import "./tokenomics.css";
const Tokenomics = () => {
    return (
        <div className="tokenomics">
           <div className="container">
           <div className="bgtextToko">
            <h1 className="text-center mt-0     text-white  ">TOKENOMICS</h1>
          </div>
               <div className="row mt-5">
                   <div className="col-lg-12 mt-5 tokenDiv">
                         <h5 className="text-center text-white p-2">Token Name CTCWTF</h5>
                   </div>
                   <div className="col-lg-12 mt-3 tokenDiv">
                         <h5 className="text-center text-white p-2">Token Symbol - WTF</h5>
                   </div>
                   <div className="col-lg-12 mt-3 tokenDiv">
                         <h5 className="text-center text-white p-2">Token Decimal - 18</h5>
                   </div>
                   <div className="col-lg-12 mt-3 tokenDiv">
                         <h5 className="text-center text-white p-2">Token Supply - 60,000,000,000</h5>
                   </div>
                   <div className="col-lg-12 mt-3 tokenDiv">
                         <h5 className="text-center text-white p-2">Hard Cap - 15,000 BNB</h5>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Tokenomics

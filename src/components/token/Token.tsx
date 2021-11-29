import React from 'react'
import "./token.css";
const Token = () => {
    return (
        <div>
            <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 mt-3">
                      <div className="tokenRemaining">
                           <h1 className="text-center text-white">Tokens Remaining</h1>
                           <p  className="text-start text-white    text-center">0</p>
                      </div>
                </div>
                <div className="col-lg-6 mt-3">
                <div className="eth">
                           <h1 className="text-center text-white">ETH Raised</h1>
                           <p className="text-start text-white    text-center ">0</p>
                      </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Token

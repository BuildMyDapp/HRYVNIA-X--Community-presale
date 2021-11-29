import React from 'react'
import "./hero.css"
import logo from '../../images/logo.png'
const Hero = () => {
    return (
        <div className="heroSection">
             <div className="container">
                 <div className="row pt-5">
                     <div className="col-lg-6 mt-5"> 
                       <h1 className=" text-white">Online P2P digital currency</h1>
                       <h1  className=" text-white"> <span>with</span>  Welcome to HRYVNIA-X Community!</h1>
                       <p className="text-white">with The HRYVNIA-X is a decentralized DeFi Token launched on Binance Smart Chain, community focused.
                            The total supply of  HRYVNIA-X TOKENS  is 440,000,000 HRYX, it is unchanged.</p>
                           <div className="text-lg-start text-center">
                            <button className="btn connectBtnHero">CONNECT WALLET</button>

                           </div>
                     </div>
                     <div className="col-lg-6"> 
                       <div className="text-lg-end text-center mt-5">
                           <img src={logo} alt=""width="300 "height="350" />
                       </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Hero

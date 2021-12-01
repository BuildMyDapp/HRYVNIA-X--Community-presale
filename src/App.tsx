import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header,Hero,Main,Footer,Token,Tokenomics,Info} from './components/exportComponent';
function App() {
  return (
    <div  >
       <Header/>
       <Hero/>
       <Main/>
       <Token/>
       <Tokenomics/>
       <Info/>
       <Footer/>
    </div>
  );
}

export default App;

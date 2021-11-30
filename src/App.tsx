import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header,Hero,Main,Footer,Token,Tokenomics} from './components/exportComponent';
function App() {
  return (
    <div  >
       <Header/>
       <Hero/>
       <Main/>
       <Token/>
       <Tokenomics/>
       <Footer/>
    </div>
  );
}

export default App;

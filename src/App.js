
import './App.css';
import LandingPage from './LandingPage';


import Footer from './Footer';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';



function App() {
  const formRef = useRef(null);
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <Navbar />
     <LandingPage />
    
     <Footer />
     
   
    </div>
  );
}

export default App;

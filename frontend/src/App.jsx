import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";
 // If you have a separate homepage
// import OtherPage from "./pages/OtherPage"; // add more pages here

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>


        
        <Route path="/" element={<Portfolio />} />


      </Routes>
   
    </BrowserRouter>
  );
}

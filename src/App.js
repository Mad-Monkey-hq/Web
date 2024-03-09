import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import Vision from "./components/Vision";
import Services from "./components/Services";


function App() {
  return (
    <>
      <div className='bg-black h-screen w-screen overflow-x-scroll no-scrollbar'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Vision" element={<Vision />}></Route>
            <Route exact path="/Services" element={<Services />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

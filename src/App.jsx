import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Common from "./Common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weatherapp from "./components/Weatherapp";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/service" element={<><Navbar /><Service /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/Common" element={<><Navbar /><Common /></>} />
        <Route path="/Weatherapp" element={<><Navbar /><Weatherapp /></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

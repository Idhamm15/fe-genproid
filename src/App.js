import './App.css';
import logo from "../src/assets/Frame 1.svg"
import toogle from "../src/assets/toogle.svg"
import hero from "../src/assets/hero.png"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import logoBrand1 from "../src/assets/brand/1.svg";
import logoBrand2 from "../src/assets/brand/2.svg";
import logoBrand3 from "../src/assets/brand/3.svg";
import logoBrand4 from "../src/assets/brand/4.svg";
import logoBrand5 from "../src/assets/brand/5.svg";
import service1 from "../src/assets/destination 1.png";
import service2 from "../src/assets/booking 1.png";
import service3 from "../src/assets/cloudy 1.png";
import { IoIosPlayCircle } from "react-icons/io";
import playHero from "../src/assets/play_hero.svg"
import React, { useState } from 'react';
import Footer from './components/footer';
import Hero from './components/hero';
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
// import Home from './pages/Home';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kategori" element={<Beranda />} />
        <Route path="/layanan" element={<Beranda />} />
        <Route path="/promo" element={<Beranda />} />
      </Routes>
    </Router>
      </>
  );
}

export default App;

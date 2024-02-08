import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import DetailsProduk from './pages/DetailProduk';
import Form from './components/transaction/form';
import Login from './components/form/login';
import Kategori from './pages/Kategori';
// import Home from './pages/Home';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/layanan" element={<Beranda />} />
        <Route path="/promo" element={<Beranda />} />
        <Route path="/details-produk" element={<DetailsProduk />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
      </>
  );
}

export default App;

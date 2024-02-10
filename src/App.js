import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import DetailsProduk from './pages/produk/DetailProduk';
import Kategori from './pages/Kategori';
import Navbar from './components/navbar';
import Artikel from './pages/Artikel';
import Promo from './pages/Promo';
import PageLogin from './pages/auth/PageLogin';
import PageRegister from './pages/auth/PageRegister';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/details-produk" element={<DetailsProduk />} />

        {/* Auth */}
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path='/testing' element={<Navbar/>} />
      </Routes>
    </Router>
      </>
  );
}

export default App;

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
import Keranjang from './pages/produk/Keranjang';
import Dashboard from './pages/dashboard/Dashboard';
import Table from "./components/table"
import { Provider } from 'react-redux';
import { Store } from './config/store';


function App() {
  return (
    <>
    <Provider store={Store}>
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kategori" element={<Kategori />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/details-produk" element={<DetailsProduk />} />
        <Route path="/keranjang" element={<Keranjang />} />

        {/* Auth */}
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path='/testing' element={<Navbar/>} />

        {/* Dashboard */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/my-product' element={<Dashboard/>}/>
        <Route path='/dashboard/transaction' element={<Dashboard/>}/>
        <Route path='/dashboard/store-setting' element={<Dashboard/>}/>
        <Route path='/dashboard/my-account' element={<Dashboard/>}/>

        {/* Testing API */}
        <Route path='/testing-api' element={<Table/>}/>
      </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App;

import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Service from '../components/service';
import Feature from '../components/feature';
import Faq from '../components/faq'
import Footer from '../components/footer';
import CardProduct from '../components/product/card_product';
import Banner from '../components/banner';
import Hero2 from '../components/hero2';
import Artikels from '../components/artikel';

const Artikel= () => {
  return (
    <>
    <Navbar/>
    <Hero2
      text1='Selamat Datang di Website Genpro ID'
      button1='Baca Selengkapnya'
      button2='Baca Selengkapnya'
      button3='Sign In'
      title1='Baca Artikel Genpro Tegal'
      title2='Powered By Genpro ID'
    />
    {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trend Kategori</h2>
  
          <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
            <ul>
                <li><button class="mt-2 rounded-3xl border-2 border-gray-500 px-6 py-2 font-medium text-gray-500 transition hover:bg-red-700 hover:text-white">Makanan</button></li>
            </ul>
            <ul>
                <li><button class="mt-2 rounded-3xl border-2 border-gray-500 px-6 py-2 font-medium text-gray-500 transition hover:bg-red-700 hover:text-white">Minuman</button></li>
            </ul>
            <ul>
                <li><button class="mt-2 rounded-3xl border-2 border-gray-500 px-6 py-2 font-medium text-gray-500 transition hover:bg-red-700 hover:text-white">Fashion</button></li>
            </ul>
            <ul>
                <li><button class="mt-2 rounded-3xl border-2 border-gray-500 px-6 py-2 font-medium text-gray-500 transition hover:bg-red-700 hover:text-white">Kerajinan</button></li>
            </ul>
          </div>

          <div class="relative mt-10 mb-5 flex  items-center justify-between rounded-md">
            <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8" class=""></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
            </svg>
            <input type="name" name="search" class="h-12 w-full cursor-text rounded-3xl border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-red-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
          </div>

          <CardProduct title='Produk Terbaru'/>
        </div>

        
    </div> */}
    {/* <Feature/> */}

    {/* Artikel */}
    <Artikels/>
    <Footer/>
    </>
  )
}

export default Artikel;
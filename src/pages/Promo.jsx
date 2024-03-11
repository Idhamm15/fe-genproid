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

const Promo= () => {
  return (
    <>
    <Navbar/>
    <Hero2
      text1='Selamat Datang di Website Genpro ID'
      button1='Baca Selengkapnya'
      button2='Baca Selengkapnya'
      button3='Sign In'
      title1='Promo Belanja Spesial'
      title2='Powered By Genpro ID'
    />
    <Footer/>
    </>
  )
}

export default Promo;
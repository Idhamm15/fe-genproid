import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Service from '../components/service';
import Feature from '../components/feature';
import Faq from '../components/faq'
import Footer from '../components/footer';
import Product from '../components/product';
import Banner from '../components/banner';
import Hero2 from '../components/hero2';

const Beranda= () => {
  return (
    <>
    <Navbar/>

    <Hero2/>
    {/* <Banner/> */}
    <Service/>
    <Product/>
    <Feature/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Beranda;
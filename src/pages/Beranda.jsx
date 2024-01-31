import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Service from '../components/service';
import Feature from '../components/feature';
import Faq from '../components/faq'
import Footer from '../components/footer';

const Beranda= () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <Feature/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Beranda;
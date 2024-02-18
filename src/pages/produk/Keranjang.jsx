import React from 'react'
import ProductDetails from '../../components/product/product_details';
import Navbar from '../../components/navbar';
import Cart from '../../components/product/cart';
import FormCheckout from '../../components/product/form_checkout';
import Footer from '../../components/footer';

const Keranjang= () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <FormCheckout/>
    <Footer/>
    </>
  )
}

export default Keranjang;
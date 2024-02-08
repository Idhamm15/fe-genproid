
import React from 'react'
import Navbar from '../components/navbar';
import Product from '../components/product';

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
    // More products...
  ]



const Kategori= () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produk Terbaru</h2>
  
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

          <Product title='Makanan'/>
          <Product title='Minuman'/>
          <Product title='Fashion'/>
          <Product title='Kerajinan'/>
        </div>

        
    </div>
    </>
  )
}

export default Kategori;
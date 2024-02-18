import React from 'react'
import ProductDetails from '../../components/product_details';
import Navbar from '../../components/navbar';
import user1 from '../../assets/produk/icon-testimonial-1.png'
import user2 from '../../assets/produk/icon-testimonial-2.png'
import user3 from '../../assets/produk/icon-testimonial-3.png'

const DetailsProduk= () => {
  return (
    <>
    <Navbar/>
    <ProductDetails/>

    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-xl tracking-tight text-gray-800">Customer Review (3)</h2>

      {/* Kode ulasan */}
      <div className="mt-6">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src={user1} alt="User 1" />
          <div>
            <h3 className="text-lg text-gray-800">John Doe</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src={user2} alt="User 2" />
            <div>
              <h3 className="text-lg text-gray-800">Jane Smith</h3>
              <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src={user3} alt="User 2" />
            <div>
              <h3 className="text-lg text-gray-800">Jane Smith</h3>
              <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Akhir kode ulasan */}
    </div>
    </div>


    </>
  )
}

export default DetailsProduk;
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const product = {
  name: 'Keranjang',
  price: '$192',
  href: '#',
  breadcrumbs: [
    // { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Beranda', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Cart() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section class="bg-white ">
            <div class="overflow-x-auto flex justify-center lg:pr-28 lg:pr-20 lg:pt-20 md:pr-20 md:pt-10 md:pl-8 md:pr-0 sm:pr-10 sm:mt-10">
                <table class="table">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th class="px-6 lg:px-12 md:px-16 sm:px-2">Image</th>
                            <th class="px-6 lg:px-36 md:px-16 sm:px-2">Name & Seller</th>
                            <th class="px-6 lg:px-36 md:px-16 sm:px-2">Price</th>
                            <th class="px-6 lg:px-36 md:px-16 sm:px-2">Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr className='lg:gap-16'>
                            <td class="pl-6 lg:pl-24 md:pl-12 sm:pl-2">
                                <div class="mt-7 mask mask-squircle w-40 h-28 sm:w-32 sm:h-24 lg:w-28 lg:h-20">
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </td>
                            <td class="pl-6 lg:pl-36 md:pl-12 sm:px-2">
                                <div class="text-sm lg:text-base">Zemlak, Daniel and Leannon</div>
                                <div class="text-xs lg:text-sm">
                                    <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </div>
                            </td>
                            <td class="pl-6 lg:pl-36 md:pl-12 sm:px-2">Baju Ternyaman</td>
                            <td class="pl-6 lg:pl-36 md:pl-12 sm:px-2">
                                <button class="grow bg-red-700 px-4 py-2 font-bold text-white text-xs lg:text-sm hover:bg-red-800 rounded-lg">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>



        
      </div>
    </div>
  )
}

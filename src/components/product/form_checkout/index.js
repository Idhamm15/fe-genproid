/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function FormCheckout() {
  return (
    <form className='bg-white flex mx-auto justify-center mt-12 lg:pr-3 sm:px-6'>
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Shipping Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Address 1
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Address 2
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Province
                </label>
                <div className="mt-2">
                    <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    </select>
                </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                </label>
                <div className="mt-2">
                    <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    </select>
                </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Postal Code
                </label>
                <div className="mt-2">
                    <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    </select>
                </div>

            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Informations</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>
        {/* Rincian Pesanan */}
        <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 justify-center">
            <div class="col-span-1 md:col-span-1 lg:col-span-1 sm:col-span-4 justify-center">
                <div class="text-base">$280</div>
                <div class="text-gray-400">Product Insurance</div>
            </div>
            <div class="col-span-1 md:col-span-1 lg:col-span-1 sm:col-span-4">
                <div class="text-base">$280</div>
                <div class="text-gray-400">Product Insurance</div>
            </div>
            <div class="col-span-1 md:col-span-1 lg:col-span-1 sm:col-span-4">
                <div class="text-base">$580</div>
                <div class="text-gray-400">Ship to Jakarta</div>
            </div>
            <div class="col-span-1 md:col-span-1 lg:col-span-1 sm:col-span-4">
                <div class="text-base">$392,409</div>
                <div class="text-gray-400">Total</div>
            </div>
            <div class="col-span-1 md:col-span-1 lg:col-span-1 md:mt-7 sm:mt-7 justify-center">
                <a href="/success.html" class="grow bg-green-500 hover:bg-green-600 px-8 py-4 font-bold text-grey rounded-full text-sm hover:text-white justify-center">Checkout Now</a>
            </div>
        </div>


        </div>
      </div>
    </form>
  )
}

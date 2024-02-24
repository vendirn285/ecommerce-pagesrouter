import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '@material-tailwind/react'

export default function SearchProduct() {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full items-start py-4 px-4 mb-9">
        <h1>Hasil pencarian untuk (keyword)</h1>
        <div className="flex items-center space-x-4">
          <select
            name=""
            id=""
            class="block text-base bg-gray-100 cursor-pointer border dark:text-gray-400 dark:bg-gray-900"
          >
            <option value="">Sort by latest</option>
            <option value="">Sort by Popularity</option>
            <option value="">Sort by Price</option>
          </select>
          <div className="flex items-center">
            <p class="text-xs text-gray-400">Show</p>
            <div class="px-2 py-2 text-xs text-gray-500 ">
              <select
                name=""
                id=""
                class="block text-base bg-gray-100 cursor-pointer w-11 dark:text-gray-400 dark:bg-gray-900"
              >
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="w-full ">
          <div class="w-2/12 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded"
                src="/images/product_1.png"
                alt="product image"
                width={300}
                height={300}
              />
            </a>
            <div class="flex flex-col">
              <div className="mb-4">
                <Link href="#">
                  <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                    Cotton Seed
                  </h5>
                  <h1 className="text-lg font-bold text-black">Baju Bayi</h1>
                </Link>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-bold text-gray-900 dark:text-white">
                  Rp.275.000
                </span>
              </div>
              <div class="flex items-center">
                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 ms-1 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span class="text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

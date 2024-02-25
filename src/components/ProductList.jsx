import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@material-tailwind/react'

const ProductList = () => {
  return (
    <div>
      <div className="w-full ">
        <div class="w-2/12 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image
              className="rounded"
              src="{image}"
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
                <h1 className="text-lg font-bold text-black">{id}</h1>
              </Link>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-gray-900 dark:text-white">
                Rp.275.000
              </span>
            </div>
            <div className="flex items-center">
              <div className="mr-1">{renderStars(5)}</div>
              <Typography color="blue-gray" className="font-medium">
                {5}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList

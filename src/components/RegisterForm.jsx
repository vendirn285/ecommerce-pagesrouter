import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RegisterForm = () => {
  return (
    <div className="flex w-full h-90% items-center justify-end px-24 pt-10 z-20 space-x-0">
      <div className="relative flex right-[90px] bottom-0">
        <Image
          src="/images/Mom&babyImage.png"
          alt="/"
          width={403}
          height={629}
          className="left-[300px]"
        />
      </div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 top- rounded-xl bg-clip-border right-[90px]">
        <div className="relative grid mx-4 mb-10 -mt-6 overflow-hidden h-28 place-items-center">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-3 tracking-normal text-black mt-16">
            Daftar Sekarang
          </h3>
          <p className="flex justify-center font-sans text-sm antialiased font-light leading-normal text-inherit">
            Sudah punya akun?
            <Link
              href="/login"
              className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
            >
              Masuk
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <h4>Nomor Telepon Atau Email</h4>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="w-full items-center h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className=" pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none  truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
        </div>
        <div className="p-6 pt-4">
          <button
            className="block w-full select-none rounded-lg bg-gradient-to-tr bg-peach from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            LOGIN
          </button>
          <div>
            <button
              className="mt-20 block w-full select-none rounded-lg bg-gradient-to-tr bg-peach from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm

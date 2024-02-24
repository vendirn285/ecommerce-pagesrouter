import React from 'react'
import Navbar from '@/components/Navbar'
import CarouselTransition from '@/components/CarouselTransition'
import ProductCard from '@/components/ProductCard'
import ImageCategory from '@/components/ImageCategory'
import Head from 'next/head'
import Footer from '@/components/Footer'

export default function index() {
  return (
    <>
      <Head>
        <title>Aleesha</title>
      </Head>

      <main>
        <section>
          <div className="container">
            <Navbar />
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-48">
            <CarouselTransition></CarouselTransition>
          </div>
        </section>
        <section className="container mx-auto pt-20">
          <div>
            <ImageCategory></ImageCategory>
          </div>
        </section>
        <h1 className="mx-24 pt-24 text-2xl font-bold">
          Produk Rekomendasi Untuk Kamu
        </h1>
        <section className="container mx-auto pt-20">
          <ProductCard />
        </section>
        <h1 className="mx-24 pt-20 text-2xl font-bold">Produk Terbaru</h1>
        <section className="container mx-auto pt-20">
          <ProductCard />
        </section>
        <h1 className="mx-24 pt-20 text-2xl font-bold">Produk Untuk Bunda</h1>
        <section className="container mx-auto pt-20 mb-20">
          <ProductCard />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}

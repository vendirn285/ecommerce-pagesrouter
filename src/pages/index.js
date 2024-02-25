import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import CarouselTransition from '@/components/CarouselTransition'
import ProductCard from '@/components/ProductCard'
import ImageCategory from '@/components/ImageCategory'
import Head from 'next/head'
import Footer from '@/components/Footer'
import axios from 'axios'
import ProductList from '@/components/ProductCard'

export default function index() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:4000/v1/products')
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

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
        <h1 className="mx-24 pt-24 text-2xl font-bold">Produk Rekomendasi</h1>
        <section className="container mx-auto pt-20">
          {products.map((product) => (
            <ProductList key={products.id} product={products.image} />
          ))}
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}

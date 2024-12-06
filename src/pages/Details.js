import React from 'react'
import Header from 'parts/Header'
import BreadCrumb from 'components/BreadCrumb'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import ProductDetails from 'parts/Details/ProductDetails'
import Suggestion from 'parts/Details/Suggestion'

export default function Details(props) {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb list={[
        { url: "/", name: "Home" },
        { url: "/categories/9912", name: "Office Room" },
        { url: "/categories/9912/products/1231", name: "Details" },
      ]} />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  )
}

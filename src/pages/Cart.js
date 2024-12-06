import React from 'react'
import Header from 'parts/Header'
import BreadCrumb from 'components/BreadCrumb'
import Footer from 'parts/Footer'
import Sitemap from 'parts/Sitemap'
import ShoppingCart from 'parts/Cart/ShoppingCart'
import ShippingDetails from 'parts/Cart/ShippingDetails'

export default function Cart(props) {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb list={[
        { url: "/", name: "Home" },
        { url: "/cart", name: "Shopping Cart" },
      ]} />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </ section>

      <Sitemap />
      <Footer />
    </>
  )
}

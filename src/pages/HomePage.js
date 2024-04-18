import Header from 'parts/Header'
import Hero from 'parts/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import JustArrive from 'parts/HomePage/JustArrive'
import React from 'react'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

export default function HomePage(props) {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrive />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}

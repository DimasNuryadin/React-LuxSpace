import Header from 'parts/Header'
import Hero from 'parts/HomePage/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import JustArrive from 'parts/HomePage/JustArrive'
import React from 'react'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import Document from "parts/Document"

export default function HomePage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrive />
      <Clients />
      <Sitemap />
      <Footer />
    </Document>
  )
}

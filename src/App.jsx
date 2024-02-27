import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'

export default function App() {

  const cards = Data.map(item => {
    return (
      <Card 
          imgUrl={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
        {cards}
    </div>
  )
}

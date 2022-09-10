import React from 'react'
import Destination from '../components/Destination'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'

export default function destinations() {
  return (
    <div>
        <Navbar />
        <div>
        <img
          src="/hotel.jpg"
          height={300}
          width={"auto"}
          alt="experience"
        />
      </div>
      <Tabs />
        <Destination />
    </div>
  )
}

import React from 'react'
import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
export default function Index() {
  return (
    <div className='container mx-auto p-4'>
        <Header></Header>
        <main className='mt-20'>
          <Hero></Hero>
        </main>
    </div>
  )
}
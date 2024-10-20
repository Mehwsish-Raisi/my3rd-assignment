import React from 'react'
import Image from 'next/image'

const HeroPage = () => {
  return (
    <section id="Header"  className="p-8 md:p-16 ">
     <center>
      <Image src={require("../../../public/profile.png")} alt="My Profile Picture" className='rounded-full' />


     </center>

      <div className='container mx-auto text-center p-6 rounded-lg shadow-lg border-4 bg-slate-200 border-slate-100 max-w-4xl mt-8'>
      <h1 className='text-2xl md:text-3xl font-bold mb-6 text-pink-800'>This is  a Hero Section</h1>
      
      <p className='text-lg md:text-xl leading-relaxed'>Hey! This is Mehwish, I&apos;m diving into Next.js to build faster, scalable web applications. Learning Next.js can transform how you build web applications by offering a more efficient, scalable, and high-performance development experience. Next.js is built on top of React, so it extends React&apos;s capabilities by offering additional features that make development faster and more efficient.</p>
      
     </div>
    </section>
    
  )
}

export default HeroPage

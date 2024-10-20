import React from 'react'


const Portfolio = () => {
  return (
    <section id="Portfolio" 
    className='md:p-16 p-8'>

      <div className='container mx-auto text-center shadow-lg p-6 rounded-xl ml-4 border-4 bg-slate-200 border-slate-100'>
        
        <h1 className='text-2xl md:text-3xl font-bold mb-6 text-pink-800'>My Portfolio</h1>
        
        <p className='text-lg max-w-3xl md:text-xl mx-auto mb-8'>
        Here are my some projects... Bringing ideas to life with TypeScript, Next.js, and Tailwind CSS, Explore my latest web development projects and see innovation in action!
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-slate-400 p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2 text-white'>
              Project 1
            </h2>
            <p>
              A dynamic resume builder using HTML, CSS, and Typescript.
            </p>
            </div>
            <div className='bg-slate-400 p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105'>
              <h2 className='text-xl font-semibold mb-2 text-white'>
                Project 2
              </h2>
              <p>
                A Countdown Timer using Next.js and Tailwind CSS.
              </p>
              </div>
              <div className='bg-slate-400 p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105'>
              <h2 className='text-xl font-semibold mb-2 text-white'>
                Project 3
              </h2>
              <p>
                My 2nd Assignment, given by Sir Hamza Alvi
              </p>
              </div>

        </div>
        </div>
      </section>
  )
}

export default Portfolio

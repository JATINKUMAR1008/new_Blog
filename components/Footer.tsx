import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full px-2 sm:px-5 py-10'>
      <div className='flex flex-col items-center justify-center w-full pt-1 bg-black rounded-lg text-white'>
          <h1 className='text-2xl font-bold mt-10 text-center'>Let{"'"}s get started on something great</h1>
          <p className='mt-3 px-3 sm:px-0 text-center mb-10'>Join over 4,000+ startups already growing with Blogs.</p>
          <span className='flex gap-5 mt-5'>
            <button className='py-3 px-5 outline outline-white font-bold rounded-md'>
              Chat to us
            </button>
            <button className='py-3 px-5 outline outline-white font-bold bg-gray-600 rounded-md'>
              Get started
            </button>
          </span>
          <div className='grid gap-10 w-full mt-5 justify-between px-10 py-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
              <ul className='font-bold'>
                <span className='text-sm'>Product</span>
                <li className='text-md mt-3'>Overview</li> 
                <li className='text-md mt-3'>Features</li>
                <li className='text-md mt-3'>Solutions</li>
                <li className='text-md mt-3'>Tutorials</li>
                <li className='text-md mt-3'>Pricing</li>
                <li className='text-md mt-3'>Releases</li>
                
              </ul>
        
              <ul className='font-bold'>
                <span className='text-sm'>Company</span>
                <li className='text-md mt-3'>About us</li> 
                <li className='text-md mt-3'>Careers</li>
                <li className='text-md mt-3'>Press</li>
                <li className='text-md mt-3'>News</li>
                <li className='text-md mt-3'>Media kit</li>
                <li className='text-md mt-3'>Contact</li>
                
              </ul>
              <ul className='font-bold'>
                <span className='text-sm'>Company</span>
                <li className='text-md mt-3'>About us</li> 
                <li className='text-md mt-3'>Careers</li>
                <li className='text-md mt-3'>Press</li>
                <li className='text-md mt-3'>News</li>
                <li className='text-md mt-3'>Media kit</li>
                <li className='text-md mt-3'>Contact</li>
                
              </ul>
              <ul className='font-bold'>
                <span className='text-sm'>Resources</span>
                <li className='text-md mt-3'>Blog</li> 
                <li className='text-md mt-3'>Newsletter</li>
                <li className='text-md mt-3'>Events</li>
                <li className='text-md mt-3'>Help center</li>
                <li className='text-md mt-3'>Tutorials</li>
                <li className='text-md mt-3'>Support</li>
                
              </ul>
              <ul className='font-bold'>
                <span className='text-sm'>Use cases</span>
                <li className='text-md mt-3'>Startups</li> 
                <li className='text-md mt-3'>Enterprise</li>
                <li className='text-md mt-3'>Government</li>
                <li className='text-md mt-3'>Saas center</li>
                <li className='text-md mt-3'>Marketplaces</li>
                <li className='text-md mt-3'>Ecommerce</li>
                
              </ul>
              <ul className='font-bold'>
                <span className='text-sm'>Social</span>
                <li className='text-md mt-3'>Twitter</li> 
                <li className='text-md mt-3'>LinkedIn</li>
                <li className='text-md mt-3'>Facebook</li>
                <li className='text-md mt-3'>GitHub</li>
                <li className='text-md mt-3'>AngelList</li>
                <li className='text-md mt-3'>Dribbble</li>
                
              </ul>
          </div>
          <div className='flex w-full flex-col gap-2 sm:flex-row items-center justify-between px-16 py-6'>
            <h1 className='text-3xl text-white'>
              Blog UI.
            </h1>
            <p className='text-sm'>
            © 2023 Copyright Reserved.
            </p>
          </div>
      </div>
      
    </div>
  )
}

export default Footer
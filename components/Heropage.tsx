import React from 'react'
import image from '../assets/bg.jpg'
import { FiArrowUpRight } from 'react-icons/fi'
const Heropage = () => {
  return (
    <div className='h-[100vh] md:h-[90vh] px-0 md:px-10 md:pb-3 '>
        <div className='relative w-full h-full'>
            <img src={image.src} className='w-full h-full object-cover md:rounded-2xl'></img>
        </div>
        <div className='absolute bottom-0 px-5 md:px-10 py-10 sm:py-20   text-white flex gap-5 items-center justify-between '>
            <div className='py-0 '>

            
            <h3 className='font-semibold mb-3'>
                Featured
            </h3>
            <h1 className='font-bold text-3xl md:text-6xl mb-4'>
                Breaking Into Product Design: Advice from Untitled Founder, Frankie
            </h1>
            <p className='text-md md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam assumenda dolorum iste asperiores veniam tempore cumque similique impedit maiores possimus.</p>
            </div>
            <div className='h-full w-4/12 cursor-pointer hidden md:block'>
                <FiArrowUpRight size={100} />
            </div>
        </div>
    </div>
  )
}

export default Heropage
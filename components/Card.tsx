import React from 'react'
import image from '../assets/de.jpg'
import av from '../assets/bg.jpg'
const Card = () => {
  return (
    <div className='flex flex-col justify-center max-w-sm md:max-w-sm py-2 gap-2'>
        <div className='w-full h-full mb-1'>
            <img src={image.src} className='w-full object-cover rounded-md cursor-pointer'/>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
            <h1 className='font-bold text-xl'>Migrating to Linear 101</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam dolorum nulla animi exercitationem. Accusamus.</p>
        </div>
        <div className='flex items-center gap-2 mt-2'>
            <img src={av.src} className='w-7 h-7 rounded-full object-cover cursor-pointer' title='Jonathan Wills'/>
            <p className='cursor-pointer text-xs font-bold' title='Jonathan Wills'>Jonathan Wills</p>
            
            <p className='text-xs font-bold'>19 Jan 2022</p>
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import Card from './Card'
import SM from './signin_modal'
import RM from './register_modal'

const RecentPage = () => {
  return (
    <div className='py-10 px-5 sm:px-20 m-auto flex flex-col items-center justify-center relative'>
        <h1 className='font-bold text-2xl mb-5 w-full sm:relative sm:right-10'>Recent Blog posts</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 w-full'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <button className='py-3 px-5 text-sm font-bold mt-5 md:mt-10 bg-gray-800 text-white rounded-md'>
            Loading more...
        </button>
    </div>
  )
}

export default RecentPage
import React from 'react'
import Card from './Card'

const RecentPage = () => {
  return (
    <div className='py-10 px-5 sm:px-20 m-auto flex flex-col items-center justify-center'>
        <h1 className='font-bold text-2xl mb-5 w-full'>Recent Blog posts</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
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
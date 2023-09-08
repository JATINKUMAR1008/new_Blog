import React from 'react'
import svg from '../assets/google-svgrepo-com.svg'
import svg2 from '../assets/facebook-svgrepo-com.svg'
import { RxCross2 } from 'react-icons/rx'
const SM = ({handleClick,open}:any) => {
  return (
    <div className={open?'fixed inset-0 bg-popBg px-2 py-5 w-full h-full flex items-center justify-center ease-in-out duration-150':"absolute ease-in-out duration-150 top-[-1000%] inset-0 bg-popBg px-2 py-5 w-full h-full flex items-center justify-center"}>
        <div className='relative bg-white w-[500px] px-5 py-12 flex flex-col items-center rounded-md'>
            <h1 className='text-2xl font-bold mt-3'>You must Sign In to read</h1>
            <p className='text-gray-400 capitalize text-sm mt-1 mb-10'>we're a team that guides each other</p>
            <div className='w-full outline cursor-pointer outline-1 mt-2 outline-gray-200 flex items-center justify-center px-2 py-3'>
            <span className='w-5 h-5 object-cover mr-1'><img src={svg.src}/></span>Google
            </div>
            <div className='w-full outline cursor-pointer outline-1 mt-2 outline-gray-200 flex items-center justify-center px-2 py-3'>
            <span className='w-5 h-5 object-cover mr-1'><img src={svg2.src}/></span>Facebook
            </div>
            <span className='my-5'>or</span>
            <form >
                <input placeholder='Enter your email' className='w-full focus:outline-gray-700 outline outline-1 outline-gray-200 py-4 px-2'/>
                <input placeholder='Enter your password' className='w-full focus:outline-gray-700 outline outline-1 mt-2 outline-gray-200 py-4 px-2'/>
                <div className='text-right relative my-3 text-blue-500 font-semibold'>
                    <a href=''>
                        Forgot Password?
                    </a>
                </div>
                <input type='submit' className='text-white w-full  bg-blue-500 py-3 px-2 mt-2 font-bold rounded-md'/>
            </form>
            <div className='mt-5 text-center'>
                don't have account? <span className='text-blue-500'><a>SignUp</a></span> today
            </div>
        <div className='absolute text-black top-0 right-0 px-5 py-5 cursor-pointer'>
            <RxCross2 size={20} onClick={handleClick}/>
        </div>
        </div>
    </div>
  )
}

export default SM
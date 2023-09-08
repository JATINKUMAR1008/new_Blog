import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenuAlt4 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
const SideNav = ({handleClick,Open}: any) => {
  return (
    <div className={Open?'fixed inset-0 w-full h-full bg-sideBg z-20 ease-in duration-150':'absolute rifght-0 left-0 top-[-100%] w-full h-full bg-sideBg z-20 ease-out duration-150'}>
        <nav className='relative flex flex-col w-full h-full items-start px-10 justify-center gap-2'>
        <ul className='flex flex-col justify-center items-start gap-[2rem] font-semibold text-2xl text-white'>
                <li className='cursor-pointer'>Home</li>
               
                <li className='flex cursor-pointer  items-center gap-3 flex-row-reverse'><IoIosArrowDown size={15} className="font-semibold"/><span>Products</span></li>
                <li className='flex  cursor-pointer items-center gap-3 flex-row-reverse'><IoIosArrowDown size={15} className="font-semibold"/><span>Blog</span></li>
                <li className='cursor-pointer'>Pricing</li>
                <li className='cursor-pointer'>About us</li>
            </ul>
            <div className='text-white w-full mt-6 text-2xl font-bold rounded-md outline outline-white flex items-center justify-center px-2 py-3 outline-1 cursor-pointer' onClick={}>
              login
            </div>
            <div className='text-white w-full mt-6 text-2xl font-bold outline rounded-md outline-white flex items-center justify-center px-2 py-3 outline-1 cursor-pointer'>
              Signup
            </div>
        </nav>
      
        <div className='absolute text-white top-20 right-10 cursor-pointer'>
            <RxCross2 size={40} onClick={handleClick}/>
        </div>
    </div>
  );
}

export default SideNav
"use client"
import React,{useState,useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenuAlt4 } from 'react-icons/hi'
const Navbar = () => {
    const [show,setShow] = useState(false)
    const controlNavbar = ()=>{
        if(window.scrollY >100){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll',controlNavbar)
      return()=>{
        window.removeEventListener('scroll',controlNavbar)
      }
    }, [])
    
  return (
    <div className={show?'w-full fixed md:relative z-10 flex flex-row justify-between items-center py-6 sm:px-10 px-5 text-black ease-in-out duration-150':'w-full fixed md:relative  flex flex-row justify-between items-center py-6 sm:px-10 px-5 text-black ease-in-out duration-150'}>
        <div>
            <h2 className='font-bold text-xl text-white sm:text-black cursor-pointer'>Blogs UI.</h2>
        </div>
        <div className='hidden md:flex list-none'>
            <ul className='flex gap-[2rem] font-semibold text-md'>
                <li>Home</li>
               
                <li className='flex items-center gap-3 flex-row-reverse'><IoIosArrowDown size={15} className="font-semibold"/><span>Products</span></li>
                <li className='flex items-center gap-3 flex-row-reverse'><IoIosArrowDown size={15} className="font-semibold"/><span>Blog</span></li>
                <li>Pricing</li>
                <li>About us</li>
            </ul>
        </div>
        <div className='hidden md:flex gap-5 items-center'>
            <span className='font-semibold text-md'>
                Log in
            </span>
            <button className='py-3 px-5 text-sm bg-gray-900 text-white font-semibold rounded-lg'>
                Sign Up
            </button>
        </div>
        <div className='text-white cursor-pointer sm:text-black md:hidden'>
            <HiMenuAlt4 size={30}/>
        </div>
    </div>
  )
}

export default Navbar
"use client"
import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenuAlt4 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import {Close} from '../redux/featues/nav-slice'
import RM from './register_modal'
import SM from './signin_modal'
import { AppDispatch, useAppSelecto } from '../redux/store'
import Link from 'next/link'
const Test = () => {
  const [rm ,setRm] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const handleClick = ()=>{
    dispatch(Close())
    setRm(!rm)
  }
  const [open,IsOpen] = useState(false)
    const tclick = () =>{
        dispatch(Close())
        IsOpen(!open)
    }
  
    const Open = useAppSelecto((state)=>state.menuReducer.value)

  return (
    <div className={Open?'fixed inset-0 block md:hidden w-full h-full bg-sideBg z-20 ease-in duration-150':"absolute right-0 left-0 top-[-100%] w-full h-full bg-sideBg z-20 ease-out duration-150"}>
        <div className='relative flex flex-col w-full h-full items-start px-10 justify-center gap-2'>
        <ul className='flex flex-col justify-center items-start gap-[2rem] font-semibold text-2xl text-white'>
                <li className='cursor-pointer'>Home</li>
               
                
                <Link href="/blogs"><li className='flex  cursor-pointer items-center gap-3 flex-row-reverse'><span>Blog</span></li></Link>
                <li className='cursor-pointer'>Pricing</li>
                <li className='cursor-pointer'>About us</li>
            </ul>/
           <div className='w-full my-2 rounded-md text-white text-xl outline font-bold outline-white outline-1 px-2 py-3 flex items-center justify-center cursor-pointer' onClick={tclick}>
            login
           </div>
           <div className='w-full rounded-md text-white text-xl outline font-bold outline-white outline-1 px-2 py-3 flex items-center justify-center cursor-pointer' onClick={handleClick}>
            Signup
           </div>

        </div>
        <div className='absolute text-white top-20 right-10 cursor-pointer'>
            <RxCross2 size={40} onClick={()=>dispatch(Close())}/>
        </div>
        <RM handleClick={handleClick} open={rm}/>
        <SM handleClick={tclick} open={open}/>
    </div>
  )
}

export default Test
import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenuAlt4 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/store'
import {Close} from '../redux/featues/nav-slice'
import RM from './register_modal'
import SM from './signin_modal'
const Test = ({Open,click}:any) => {
  const [rm ,setRm] = useState(false)
  const handleClick = ()=>{
    setRm(!rm)
  }
  const [open,IsOpen] = useState(false)
    const tclick = () =>{
        IsOpen(!open)
    }
  

  return (
    <div className={Open?'fixed inset-0 w-full h-full bg-sideBg z-20 ease-in duration-150':"absolute right-0 left-0 top-[-100%] w-full h-full bg-sideBg z-20 ease-out duration-150"}>
        <div className='relative flex flex-col w-full h-full items-start px-10 justify-center gap-2'>
        <ul className='flex flex-col justify-center items-start gap-[2rem] font-semibold text-2xl text-white'>
                <li className='cursor-pointer'>Home</li>
               
                <li className='flex cursor-pointer  items-center gap-3 flex-row-reverse'><IoIosArrowDown size={15} className="font-semibold"/><span>Products</span></li>
                <li className='flex  cursor-pointer items-center gap-3 flex-row-reverse'><IoIosArrowDown size={15} className="font-semibold"/><span>Blog</span></li>
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
            <RxCross2 size={40} onClick={click}/>
        </div>
        <RM handleClick={handleClick} open={rm}/>
        <SM handleClick={tclick} open={open}/>
    </div>
  )
}

export default Test
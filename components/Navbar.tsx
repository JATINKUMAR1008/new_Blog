"use client"
import React,{useState,useEffect, useRef} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenuAlt4 } from 'react-icons/hi'
import LoginModal from './LoginModal'
import { useDispatch } from 'react-redux'
import { Open } from '../redux/featues/nav-slice'
import Test from './test'
import { useRouter } from 'next/router'
import SM from './signin_modal'
import RM from './register_modal'
import { AppDispatch, useAppSelecto } from '../redux/store'
import Link from 'next/link'
const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth = useAppSelecto((state)=>state.authReducer.value.isAuth)
    const user_name = useAppSelecto((state)=>state.authReducer.value.name)
    const [show,setShow] = useState(false)
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [open,IsOpen] = useState(false)
    const click = () =>{
        IsOpen(!open)
    }
    const [rm ,setRm] = useState(false)
    const handleClick = ()=>{
      setRm(!rm)
    }
    const nav = useRef(null)
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
  
        if (scrollTop === 0) {
          setShow(true);
        } else {
          setShow(false);
        }
  
        if (scrollTop > lastScrollTop) {
          nav.current.style.top = "-80px";
        } else {
          nav.current.style.top = "0px";
        }
  
        setLastScrollTop(scrollTop);
      });
    }, [lastScrollTop]);
    
    
  return (
    <div id="nav" ref={nav} className={show?'w-full fixed bg-transparent text-black md:bg-transparent md:relative z-10 flex flex-row justify-between items-center py-6 sm:px-10 px-5 ease-in-out duration-150 ':'w-full fixed bg-black md:bg-transparent md:relative text-white z-10 flex flex-row justify-between items-center py-6 sm:px-10 px-5 ease-in-out duration-150 '}>
        <div>
            <Link href="/"><h2 className='font-bold text-xl md:text-2xl cursor-pointer'>Blogs UI.</h2></Link>
        </div>
        <div className='hidden md:flex list-none'>
            <ul className='flex gap-[2rem] font-semibold text-md'>
                <Link href='/'><li>Home</li></Link>
                <Link href="/blogs"><li className='flex items-center gap-3 flex-row-reverse'><span>Blog</span></li></Link>
                <Link href="/pricing"><li>Pricing</li></Link>
                <Link href="/about"><li>About us</li></Link>
            </ul>
        </div>
        {auth?(
          <div className='hidden md:flex gap-5 items-center'>
            <button className='px-4 py-2 text-white bg-gray-900 font-semibold text-sm rounded-lg'>
              {`Hi, `+`${user_name}`}
            </button>
            </div>
        ):(<div className='hidden md:flex gap-5 items-center'>
            <span className='font-semibold text-md cursor-pointer' onClick={click}>
                Log in
            </span>
            <button className='py-3 px-5 text-sm bg-gray-900 text-white font-semibold rounded-lg' onClick={handleClick}>
                Sign Up
            </button>
        </div>)}
        
        <div className='cursor-pointer md:hidden'>
            <HiMenuAlt4 size={30} onClick={()=>dispatch(Open())}/>
        </div>
        <SM handleClick={click} open={open}/>
        <RM handleClick={handleClick} open={rm}/>
    </div>
    
  )
}

export default Navbar
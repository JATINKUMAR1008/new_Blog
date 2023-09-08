
import React,{useState,useEffect, useRef} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { HiMenuAlt4 } from 'react-icons/hi'
import LoginModal from './LoginModal'
const Navbar = ({handleClick}: any) => {
    const [show,setShow] = useState(true)
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [open,IsOpen] = useState(false)
    const click = () =>{
        IsOpen(!open)
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
    <div id="nav" ref={nav} className={show?'w-full fixed bg-transparent text-black md:bg-transparent md:relative z-10 flex flex-row justify-between items-center py-6 sm:px-10 px-5 ease-in-out duration-150 ':'w-full fixed bg-black md:bg-transparent md:relative z-10 flex flex-row justify-between items-center py-6 sm:px-10 px-5 ease-in-out duration-150 '}>
        <div>
            <h2 className='font-bold text-xl md:text-2xl text-white md:text-black cursor-pointer'>Blogs UI.</h2>
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
            <span className='font-semibold text-md cursor-pointer' onClick={click}>
                Log in
            </span>
            <button className='py-3 px-5 text-sm bg-gray-900 text-white font-semibold rounded-lg'>
                Sign Up
            </button>
        </div>
        <div className='text-white cursor-pointer md:text-black md:hidden'>
            <HiMenuAlt4 size={30} onClick={handleClick}/>
        </div>
        <LoginModal handleClick={click} open={open}/>
    </div>
    
  )
}

export default Navbar
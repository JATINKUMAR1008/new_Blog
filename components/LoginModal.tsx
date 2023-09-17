import React from "react";
import image from '../assets/lbg.jpg'
import { RxCross2 } from 'react-icons/rx'
const LoginModal = ({handleClick,open}:any) => {
  return (
    <div className={open?"fixed inset-0 bg-popBg w-full h-full flex items-center justify-center ease-in duration-150":"fixed inset-0 top-[-100%] bg-popBg w-full h-full flex items-center justify-center ease-out duration-150"}>
      <div className=" w-10/12 sm:w-[60%] bg-white max-h-[30rem] rounded-lg flex items-center gap-2">
        <div className="py-10 px-5 w-full md:w-1/2 h-full flex items-center justify-center flex-col mt-1">
        <h1 className="w-full text-center text-2xl font-bold">Blog UI.</h1>
        <p className="mt-3 text-gray-700 text-center text-sm font-semibold">
          Welcome back to Blog UI.
        </p>
        <form className="mt-5">
          <input
            className=" w-full mb-2 outline outline-1 outline-gray-300 py-3 px-5"
            placeholder="Enter your email"
          />
          <input
            className=" w-full mb-5 outline outline-1 outline-gray-300 py-3 px-5"
            placeholder="Enter your password"
          />
          <span className="flex mt-3 flex-wrap justify-between w-full">
          <span className="items-center flex gap-2 mb-2">
            <input type="checkbox" className="h-4 w-4 bg-blue-900" id="checkboxEle"/>
            <label className="text-sm font-thin text-black" htmlFor="checkboxEle">Keep me logged in</label>
          </span>
          <span className="text-sm font-semibold text-blue-700 cursor-pointer">
            Forgot Password?
          </span>
          </span>
          <button className="w-full font-semibold py-3 px-5 mt-5 text-white bg-blue-700 rounded-full">
            Login
          </button>
          
        </form>
        
      </div>
      <div className="hidden md:block w-1/2 ">
        <img src={image.src} className="w-full h-full max-h-[30rem] object-cover rounded-sm"/>
      </div>
      <div className='absolute text-white top-20 right-10'>
            <RxCross2 size={40} onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

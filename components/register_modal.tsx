"use client"
import React, { useState } from 'react'
import svg from '../assets/google-svgrepo-com.svg'
import svg2 from '../assets/facebook-svgrepo-com.svg'
import { RxCross2, RxValue } from 'react-icons/rx'
import { useRouter } from 'next/router'
const RM = ({handleClick,open}:any) => {
    const [er,setEr] = useState("")
    const initialvalue={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    }
    const [user,setUser] = useState(initialvalue)
    const [cp,setCp] = useState("") 

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        setUser((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };

    const handldeSubmit = async(e:any) =>{
        e.preventDefault()
        console.log(user)
        if(user.password === cp){
            const response = await fetch('/api/users',{
                method: 'POST',
                body: JSON.stringify(user)
            })
           
            const res = await response.json()
            if(res.success){
                handleClick()
                alert("Registered")
                setUser(initialvalue)
            }
        }
        else{
            setEr("Password Must be same in both fields")
        }
        
    }
    const [np,setNp] = useState(false)
  return (
    <div className={open?'fixed inset-0 bg-popBg px-2 py-5 w-full h-full flex items-center justify-center ease-in-out duration-150':"absolute ease-in-out duration-150 top-[-1000%] inset-0 bg-popBg px-2 py-5 w-full h-full flex items-center justify-center"}>
        <div className='relative bg-white w-[350px] sm:w-[500px] px-5 py-10 flex flex-col items-center rounded-md'>
            <h1 className='text-2xl font-bold mt-3 text-center'>Create Your Account Today</h1>
            <p className='text-gray-400 capitalize text-sm mt-1 mb-10'>we're a team that guides each other</p>
            {!np&&(<><div className='w-full outline cursor-pointer outline-1 mt-2 outline-gray-200 flex items-center justify-center px-2 py-3'>
            <span className='w-5 h-5 object-cover mr-1'><img src={svg.src}/></span>Google
            </div>
            <div className='w-full outline cursor-pointer outline-1 mt-2 outline-gray-200 flex items-center justify-center px-2 py-3'>
            <span className='w-5 h-5 object-cover mr-1'><img src={svg2.src}/></span>Facebook
            </div>
            <span className='my-5'>or</span></>)}
            {np&&<p className='text-gray-700 font-semibold mb-2 '>Last Step to move forward</p>}
            {<p className='text-red-500 text-center'>{er}</p>}
            <form className='w-full' onSubmit={(e)=>handldeSubmit(e)}>
                {!np&&(
                    <>
                    <span className='grid grid-cols-2 items-center my-2 gap-2'>
                    <input placeholder='Enter your First Name' className='w-full focus:outline-gray-700 outline outline-1 outline-gray-200 py-4 px-2' name='firstName' value={user.firstName} onChange={handleInputChange}/>
                    <input placeholder='Enter your Last Name' className='w-full focus:outline-gray-700 outline outline-1 outline-gray-200 py-4 px-2' name='lastName' value={user.lastName} onChange={handleInputChange}/>
                </span>
                <input placeholder='Enter your email' className='w-full focus:outline-gray-700 outline outline-1 outline-gray-200 py-4 px-2' name='email' value={user.email} onChange={handleInputChange}/>
                    </>
                )}
                
                {np&&(
                    <>
                    <input placeholder='Enter your password' className='w-full focus:outline-gray-700 outline outline-1 outline-gray-200 py-4 px-2 my-3' name='password' value={user.password} onChange={handleInputChange}/>
                    <input placeholder='Confirm your password' className='w-full focus:outline-gray-700 outline outline-1 outline-gray-200 py-4 px-2' value={cp} onChange={(e)=>setCp(e.target.value)}/>
                    <input type='submit' className='w-full bg-blue-600 text-white font-semibold py-3 px-2 rounded-md my-2 '/>
                    </>
                )}
            </form>
            {!np&&<button className='w-full bg-blue-600 text-white font-semibold py-3 px-2 rounded-md my-2' onClick={()=>setNp(!np)}>Next Step</button>}
            <div className='mt-5 text-center'>
                already have account? <span className='text-blue-500'><a>SignIn</a></span> now
            </div>
            <div className='absolute text-black top-0 right-0 px-5 py-5 cursor-pointer'>
            <RxCross2 size={20} onClick={handleClick}/>
        </div>
        </div>
       
    </div>
  )
}

export default RM
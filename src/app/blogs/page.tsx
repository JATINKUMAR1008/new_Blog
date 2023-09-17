"use client"
import getData from '@/lib/getData'
import React, { FC, useEffect, useState } from 'react'
import { useAppSelecto } from '../../../redux/store'
import Card from '../../../components/Card'

var mock_data = [{
  "id": 1,
  "text": "Devpulse"
}, {
  "id": 2,
  "text": "Linklinks"
}, {
  "id": 3,
  "text": "Centizu"
}, {
  "id": 4,
  "text": "Dynabox"
}, {
  "id": 5,
  "text": "Avaveo"
}, {
  "id": 6,
  "text": "Demivee"
}, {
  "id": 7,
  "text": "Jayo"
}, {
  "id": 8,
  "text": "Blognation"
}, {
  "id": 9,
  "text": "Podcat"
}, {
  "id": 10,
  "text": "Layo"
}] 



const Page = async () => {
  const name = useAppSelecto((state) => state.authReducer.value.name)
  const suggestion = [
    "movies", "tech", "anime", "new", "trending", "hot", "space", "politics", "game", "war", "nest"
  ]
  console.log(name)
  return (
    <div className='py-10 px-2 mt-11 sm:mt-2 sm:px-5 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold mt-2 text-center w-full'>Find what you like</h1>
      <div className='max-w-xs sm:max-w-lg mt-4'>
        <div className='mt-4 w-full px-2'>
          <Search_box list_data={mock_data}/>
        </div>
        <div className='mt-10 flex items-center w-full gap-3 overflow-auto suugestion'>
          {
            suggestion.map((value, key) => (
              <button key={key} className='px-3 py-2 hover:font-semibold ease-in duration-100 rounded-md'>
                {value}
              </button>
            ))
          }
        </div>
      </div>
      {/**View Blogs with search changes everytime */}
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-10 px-3 sm:px-8 py-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <button className='py-3 px-5 text-sm font-bold mt-5 md:mt-10 bg-gray-800 text-white rounded-md'>
        Loading more...
      </button>
    </div>
  )
}
export const Search_box = ({list_data}:{list_data:{id: number,text: string}[]}) => {
  const [input ,setInput] = useState("")
  const [suggest,setSuggest] = useState(false)
  const handleChange = (e: any) =>{
    setInput(e.target.value)
    setSuggest(true)
    
  }
  const filterData = list_data.filter((el)=>{
    if(input === ''){
      return el
    }else{
      return el.text.toLowerCase().includes(input.toLowerCase())
    }
  })
  const handleItemClick = (str: string) =>{
    setInput(str)
    setSuggest(false)
  }
  useEffect(()=>{
    if(input === ''){
      setSuggest(false)
    }
  },[input])
  return (
    <form className='flex relative flex-col sm:flex-row w-full items-center gap-3'>
      <input type='text' placeholder='search' className='outline outline-1 outline-gray-300 py-3 px-2 rounded-sm w-full sm:w-[70%] ' value={input} onChange={(e)=>handleChange(e)} />
      <button type='submit' className='bg-gray-900 text-white w-full sm:w-[30%]  rounded-md px-3 py-3 font-semibold'>
        Search
      </button>
      <div className={`absolute w-full px-3 py-3 h-[5rem] overflow-y-auto left-0 outline outline-1 outline-gray-300 top-12 z-10 bg-white ${!suggest && `hidden`}`}>
          <ul>
            {
              filterData.map((item,key)=>(
                <li key={key} className='cursor-pointer' onClick={()=>handleItemClick(item.text)}>
                  {item.text}
                </li>
              ))
            }
          </ul>
      </div>
    </form>
  )
}

export default Page
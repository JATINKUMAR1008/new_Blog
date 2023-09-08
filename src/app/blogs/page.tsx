import getData from '@/lib/getData'
import React, { FC, useEffect, useState } from 'react'
interface pageProps{
    params : {name: String}
}
const page: FC<pageProps> = async ({params}) => {
    const data = await getData()
    console.log(data)
  return (
    <div>
        p[age]
    </div>
  )
}

export default page
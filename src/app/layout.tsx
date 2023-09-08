"use client"
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/SideNav'
import React, { useState } from 'react'
import { ReduxProvider } from '../../redux/provider'
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Created By Jatin Kumar 👦',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [ open,isOpen] = useState(false)
const handleClick= ()=>{
  console.log(open)
  isOpen(!open)
}
  return (
    <html lang="en">
      <body><ReduxProvider><Navbar handleClick={handleClick}/><SideNav handleClick={handleClick} Open={open}/>{children}</ReduxProvider></body>
    </html>
  )
}

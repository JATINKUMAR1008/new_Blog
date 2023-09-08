"use client"
import './globals.css'
import Navbar from '../../components/Navbar'
import { ReduxProvider } from '../../redux/provider'
import Test from '../../components/test'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open,Isopen] = React.useState(false)
  const click = ()=>{
    Isopen(!open)
  }

  return (
    <html lang="en">
      <body><Navbar Mclick={click}/><Test click={click} Open={open}/><ReduxProvider>{children}</ReduxProvider></body>
    </html>
  )
}

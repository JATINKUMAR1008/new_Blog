
import './globals.css'
import Navbar from '../../components/Navbar'
import Test from '../../components/test'
import React from 'react'
import ReduxProvider from '../../redux/provider'
import Footer from '../../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body><ReduxProvider><Navbar/><Test/>{children}<Footer/></ReduxProvider></body>
    </html>
  )
}

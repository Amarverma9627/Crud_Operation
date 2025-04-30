import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Componants/navbar/Navbar'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout

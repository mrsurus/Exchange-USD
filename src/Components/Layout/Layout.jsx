import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

function Layout() {
  return (
    <div className='px-5'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout
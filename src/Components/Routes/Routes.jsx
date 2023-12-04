import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import DispalyError from '../Shared/DisplayError/DisplayError'
import AdditionalInfo from '../ExChaProcess/AdditionalInfo'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <DispalyError></DispalyError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, 
            {
                path: '/addinfo',
                element: <AdditionalInfo></AdditionalInfo>
            }
        ]

    }
  ])

export default router
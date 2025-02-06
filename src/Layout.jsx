import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-gradient-to-b from-black to-blue-900 min-h-screen p-8'>
      <Header />
      <Outlet />

    </div>
  )
}

export default Layout

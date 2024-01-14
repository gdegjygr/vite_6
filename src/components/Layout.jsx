import React from 'react'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <>
    <Outlet/>
    <footer>
        <p>12.01.2024</p>
    </footer>
    </>
  )
}

export default Layout
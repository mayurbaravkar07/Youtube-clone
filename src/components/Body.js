import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex grid grid-flow-col"> 
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Body

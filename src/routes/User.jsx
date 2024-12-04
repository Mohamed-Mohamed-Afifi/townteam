import React from 'react'
import { Outlet } from 'react-router-dom'

export const User = () => {
  return (
    <div>
        <h1>Admin Header</h1>
         <Outlet/>
        <h1>Admin Footer</h1>
    </div>
  )
}

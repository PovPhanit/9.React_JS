import React from 'react'
import { Outlet} from 'react-router-dom'
import Navigate from '../Page/Navigate'
export default function AppLayOut() {
  return (
    <div>
        <Navigate />
        <Outlet />
    </div>
  )
}

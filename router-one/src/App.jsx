import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './Homepage'
import Navbar from './Navbar'
import Applayout from './Applayout'
import Error from './Error';

// const route=createBrowserRouter([
//   {
//     path:"/",
//     element:<Homepage />
//   },
//   {
//     path:"/navbar",
//     element:<Navbar />
//   }
// ])
const route=createBrowserRouter([
  {
    element:<Applayout />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Homepage />
      },
      {
        path:"/navbar",
        element:<Navbar />
      }
    ]
  }
])
export default function App() {
  return <RouterProvider router={route}/> 
}

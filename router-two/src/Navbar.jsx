import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <Link to='/'>Hompage</Link>
        <Link to='/login'>Login</Link>
        <Link to='/price'>Price</Link>
        <Link to='/app'>App</Link>
    </div>
  )
}

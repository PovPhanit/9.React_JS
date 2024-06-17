import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <ul>
        <li>
            <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
            <NavLink to="/navbar">Navbar</NavLink>
        </li>
    </ul>
    </>
  )
}

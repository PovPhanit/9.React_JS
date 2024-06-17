import React from 'react'
import { useSelector } from 'react-redux'
export default function Header() {
    const {name}=useSelector((store)=>store.account)
    console.log(name);
  return (
    <div>My name is : {name} </div>
  )
}

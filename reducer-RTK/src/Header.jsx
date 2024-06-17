import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
    const name=useSelector((store)=>store.account.username);
    console.log(name);
  return (
    <div>Header Navigate : {name}</div>
  )
}

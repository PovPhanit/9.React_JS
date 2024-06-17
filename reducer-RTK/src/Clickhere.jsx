import React from 'react'
import { useDispatch } from 'react-redux'
import { address, updateName } from './services/accountSlice';

export default function Clickhere() {
    const dispatch = useDispatch();
    function handleUpdateName(){
        dispatch(updateName("Phanit"));
        dispatch(address());
    }
  return (
    <button onClick={handleUpdateName}>Click</button>
  )
}

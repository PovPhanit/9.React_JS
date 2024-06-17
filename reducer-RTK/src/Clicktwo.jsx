import React from 'react'
import { useDispatch } from 'react-redux'
import { updateName, updateNameID } from './services/accountSlice';

export default function ClickTwo() {
    const dispatch = useDispatch();
    function handleUpdateName(){
        dispatch(updateNameID("Long","1"));
    }
  return (
    <button onClick={handleUpdateName}>Click</button>
  )
}

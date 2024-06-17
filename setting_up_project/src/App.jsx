import React from 'react'
import { HiCheckCircle } from "react-icons/hi2";
import toast,{Toaster} from 'react-hot-toast';
export default function App() {
  function handleToast(){
    console.log("true");
    toast.success('Successfully toasted!')
  }
  return (
   <>
    <Toaster
    position="top-center"
    reverseOrder={true}
  />
    <div className='bg-red-500  md:bg-green-400'>
      <div onClick={handleToast} className='flex  text-center justify-center items-center'>
      <HiCheckCircle />app
      </div>
    </div>
   </>
  )
}

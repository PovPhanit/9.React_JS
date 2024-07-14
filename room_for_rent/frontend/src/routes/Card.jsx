import React, { useEffect, useState } from 'react'
import NavigateTop from '../components/NavigateTop'
import NavigateBotttom from '../components/NavigateTopBottom';
export default function Homepage() {

  return (
    <div>
      <NavigateTop />
        <div className='mt-[80px]'>Card</div>
        
      <NavigateBotttom />      
    </div>
  )
}

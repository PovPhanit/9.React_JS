import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children,issubmitting,to,type}) {
    const className="bg-yellow-400 uppercase tracking-wide font-semibold text-stone-800 py-3 px-4 inline-block rounded-full transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
    const base="bg-yellow-400 text-sm uppercase tracking-wide font-semibold text-stone-800 py-3 px-4 inline-block rounded-full transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
    const styles={
      primary:base+'px-4 py-3 md:px-6 md:py-4',
      small:base + 'py-4 py-2 md:px-5 md:py-2.5 text-xs',
      secondary:"bg-transparent text-sm border-2 border-stone-300 uppercase tracking-wide font-semibold text-stone-400 py-3 px-4 inline-block rounded-full transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    }
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>
  return (
    <button disabled={issubmitting} className={styles[type]}>
        {children}
    </button>
  )
}

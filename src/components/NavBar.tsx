import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className=' flex justify-between items-center px-4 bg-black rounded text-white p-4'>
        <h1 className=' font-bold text-cyan-400 text-xl'>Mayank<span className=' text-yellow-400'>Nandwani</span></h1>
        <nav>
            <ul className='hidden md:flex gap-5 justify-evenly  items-center text-lg '>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/Work">Work</Link>
            </li>
            <li>
                <Link href="/Projects">Projects</Link>
            </li>
            <li>
                <Link href="/Blog">Blog</Link>
            </li>
            <li>
                <Link href="/Contact">Contact</Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/Logo.svg'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    //Handle responsive nav
    const handleNav = () => {
        setNav(!nav)
    }

    return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4'>
        <a href="#home"><img src={ Logo } alt="codykoscielski.dev Logo" /></a>
        <ul className='hidden md:flex'>
            <a href="#home"><li className='p-4 text-white text-md'>Home</li></a>
            <li className='p-4 text-white text-md'>Company</li>
            <li className='p-4 text-white text-md'>Resources</li>
            <li className='p-4 text-white text-md'>About</li>
            <li className='p-4 text-white text-md'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={40} color="#E76F51"/> : <AiOutlineMenu size={40} color="#E76F51"/>}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[75%] h-full border-r bg-red ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img src={ Logo } className="p-4" alt="codykoscielski.dev Logo" />
            <li className='p-4 border-b border-gray-600 text-white text-md'>Home</li>
            <li className='p-4 border-b border-gray-600 text-white text-md'>Company</li>
            <li className='p-4 border-b border-gray-600 text-white text-md'>Resources</li>
            <li className='p-4 border-b border-gray-600 text-white text-md'>About</li>
            <li className='p-4 text-white'>Contact</li>
        </ul>
    </nav>
    )
}

export default Navbar
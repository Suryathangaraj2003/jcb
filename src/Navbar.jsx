import React from 'react'
import logo from './resource/TMP.png';

const Navbar = () => {
  return (
    <div>
         <nav className='fixed top-0 left-0 w-screen bg-black flex flex-row items-center'>
        <img src={logo} alt="TMP Logo" className='max-h-12' />
        <h1 className='text-white text-xl mt-1 ml-2'>TMP Earth Movers</h1>
        
        
      </nav>
    </div>
  )
}

export default Navbar
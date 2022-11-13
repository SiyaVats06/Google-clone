import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className='  p-5 pb-0 bg-gray-300 dark:bg-gray-800 text-black flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-400'>
    <div className='flex justify-between items-center  w-screen'>
    <Link to='/'>
         <p className='text-2xl  font-bold py-1 px-2 dark:bg-gray-500 dark:text-gray-900'><span className='text-red-500'>G</span><span className='text-green-500'>O</span><span className='text-blue-500'>O</span><span className='text-yellow-500'>G</span><span className='text-black-500'>L</span> <span className='text-red-500'>🔍</span></p>
    </Link>
    <button className=' text-xl font-bold ml-0 mr-14 p-5 hover:shadow-lg
     bg-white  dark:bg-gray-600 dark:text-gray-100  border rounded-full' type='button' onClick={()=>setDarkTheme(!darkTheme)}>{darkTheme?" 🌞":" 🌙"}</button>

    </div>
    <Search />
    </div>
  )
}

export default Navbar
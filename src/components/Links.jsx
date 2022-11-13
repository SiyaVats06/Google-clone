import React from 'react'
import { NavLink } from 'react-router-dom'

const links=[
    {url:'/', text:'Go TO Home'},
    {url:'/search', text:'search'}
];

export const Links = () => {
  return (
    <div className=' flex sm:justify-center
     justify-center items-center mt-5  lg:mr-12 sm:ml-10'>
        {links.map(({url,text})=>(
            <NavLink to ={url}  className=' m-5 text-blue-700 border-b-2 dark:text-blue-500 border-blue-700 pb-2'>{text}</NavLink>
        ))}
        
    </div>
  )
}

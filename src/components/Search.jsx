import React,{useEffect,useState} from 'react'
import { useDebounce } from 'use-debounce'
import {useResultContext} from '../contexts/ResultContextProvider'
import { Links } from './Links'

const Search = () => {
const [text, settext] = useState('')
const {setsearchTerm}=useResultContext();
const [debouncedValue]=useDebounce(text,300)


useEffect(()=>{
  if(debouncedValue)  setsearchTerm(debouncedValue)
},[debouncedValue])

  return (
    <div className='relative  sm:ml-48 md:ml-72 sm:-mt-10 mb-2 mt-3 mr-40'>
        <input value={text}
          type='text'
          className=' sm:w-4/5  w-80 h-10 dark:bg-gray-100 bg-white dark:text-black text-gray-900 border-black rounded-full shadow-sm outline-none p-6 hover:shadow-lg'
          placeholder='search here'
          onChange={(e)=>settext(e.target.value)}
          
        />
    
        <Links />
         </div>
  )
}

export default Search
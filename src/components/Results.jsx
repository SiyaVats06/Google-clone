import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

useEffect(() => {
  getResults(`?query=${searchTerm}`)
},[])



  if (isLoading) return <Loading />


  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between  space-y-6 sm:px-56'>
         {results?.items?.map(({link,title},index)=>(
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                 <p className='text-sm'>
                  {link}
                 </p>
                 <p className='text-lg hover:underline dark:text-blue-300 text-blue-900 '>
                 {title}
                 </p>
                </a>
              </div>
         ))
         }
        </div>
      );
    case '/videos':
      return 'videos';
    case '/news':
      return 'news';
    case '/images':
      return 'images';


    default:
      return "Error";
  }
}


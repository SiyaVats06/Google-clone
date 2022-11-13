import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routers} from './components/Routers';

const App = () => {
    const[darkTheme,setDarkTheme]=useState(true)
  return (
    <div className={darkTheme?'dark':''}>
    <div className='bg-gray-300 dark:bg-gray-900 dark:text-gray-100'>
    <Navbar  darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
       <Routers/>
       <Footer />
    </div>
    </div>
  )
}

export default App;
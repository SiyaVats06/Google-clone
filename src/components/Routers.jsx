import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search';
import {Results} from './Results'
export const Routers = () => {
  return (
    <div className='p-4 h-4/5'>
      
        <Routes>
          <Route path="/"  element={<div>write query in input section</div>} />
          <Route path="search" element={<Results />} />
          <Route path="videos" element={<Results />} /> 
          <Route path="images" element={<Results />} />
          <Route path="news"   element={<Results />} />
        </Routes>
      

    </div>
  );
}


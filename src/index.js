import React from "react";
import  ReactDOM from "react-dom";
import { BrowserRouter,  Routes,Route } from "react-router-dom";
import { ResultContextProvider } from './contexts/ResultContextProvider';

import App from './App';
import './index.css';








ReactDOM.render(
    <ResultContextProvider>
<BrowserRouter>
    <Routes>
    <Route path="*" element={< App/>}>
     </Route>
    </Routes>
</BrowserRouter>
</ResultContextProvider>
    
,document.getElementById('root'));
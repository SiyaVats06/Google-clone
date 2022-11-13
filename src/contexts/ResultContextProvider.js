import React,{createContext,useContext,useState} from "react";

const ResultContext=createContext();
const baseUrl='https://g-search.p.rapidapi.com/search';


 export const ResultContextProvider = ({children}) => {
 const [results, setresults] = useState([])
 const [isLoading, setisLoading] = useState(false);
 const [searchTerm, setsearchTerm] = useState('')

 const getResults=async(type)=>{
 setisLoading(true);
 const response=await fetch(`${baseUrl}${type}`,{
    method:'GET',
    headers:{
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
    }
 });
 const data=await response.json();
 setresults(data);
 console.log(data);
 setisLoading(false);
 }
  return (
   <ResultContext.Provider value={{getResults,results,searchTerm,setsearchTerm,isLoading}}>
   {children}
   </ResultContext.Provider>
  );
}

export const useResultContext=()=>useContext(ResultContext);
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link, json } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery,setSeachQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const dispatchCache =useDispatch();
  const searchCache=useSelector((store)=>store.search);

  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  
  const getSuggestions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json =await data.json();
     setSuggestions(json[1]);

     //update in the cache 
     dispatchCache(cacheResults({
      [searchQuery]:json[1],
     }));
  }

  useEffect(()=>{
  const timerId =setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
     }else{
     
      getSuggestions();
     }
  },200)

     return ()=>{
    clearTimeout(timerId);
   }
  
  
  },[searchQuery]);





  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg" >
        <div className="flex col-span-1  " >
            <img onClick={()=>toggleMenuHandler()} className="h-12 mx-2 cursor-pointer"src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256" ></img>
            <img  className ="h-12 "src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Youtube_shorts_icon.svg"></img>      
        </div>

      <div className="col-span-10 px-10">
          <div>
            <input  className="w-1/2 rounded-l-full border border-gray-400 p-2 "type='text' placeholder='Search' value={searchQuery} onChange={(e)=>setSeachQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}></input>
            <button className="rounded-r-full border border-gray-400 px-5 py-2 bg-gray-100">🔍</button>
        </div>
       {  showSuggestions && (<div className="fixed  py-[2px]  w-[41.90rem] shadow-lg  border-gray-50 absolute">
         <ul>
          {suggestions.map((s)=><li className="px-1 py-2 shadow-sm bg-white rounded-lg">🔍{s}</li>)}
         </ul>
        </div>)}
      </div>

      <div>
        <img  className="h-12 " alt="user-icon" src="data:image/png;base64,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"></img>
      </div>


     
    
      </div>
     
  )
}

export default Head

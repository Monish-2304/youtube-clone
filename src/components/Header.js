import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import axios from 'axios';
import { cacheResults } from '../utils/searchSlice';
import { json } from 'react-router-dom';
const Header = () => {
  const dispatch =useDispatch();
  const [searchQuery,setSearchQuery]=useState("");
  const [searchSuggestions,setSearchSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.search);
 
 
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

  const getSearchSuggestions = async () => {
    try {
      console.log("api called"+searchQuery);
      const response = await axios.get(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const data = response.data;
      setSearchSuggestions(data[1]);
      dispatch(cacheResults({
        [searchQuery]:data[1],
      }));
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
setSearchSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
     },200);
    return()=>{
      clearTimeout(timer);
    }
  },[searchQuery])
 
  return (
    <div className=" grid grid-flow-col mb-2 min-w-full items-center fixed top-0 bg-white z-10">
      {/*hamburger menu and logo*/}
      <div className="flex flex-row col-span-1 items-center">
        <img
         onClick={()=>toggleMenuHandler()}
         className="h-8 mx-1 cursor-pointer hidden md:block"
         alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <img 
        className="h-12 md:h-14"
        alt="logo" src=" https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
      </div>
       {/*search*/}
      <div className="flex flex-row sm:col-span-0 md:grid-cols-1 md:col-span-10 md:px-6 items-center">
        
        <input className="sm:pr-2 sm:pl-4 w-full md:w-1/2 h-8 p-1 md:px-3 border border-gray-600 rounded-l-full " type="text" placeholder='Search'
          value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>{setShowSuggestions(false); setSearchQuery("")}}
        />
        <button className=" md:p-2 h-8 px-1 md:px-2 border border-gray-500 rounded-r-full bg-gray-50">
          <img className="h-4" alt='search' src='https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg?w=2000'/>
        </button>
        {showSuggestions &&  <ul className="absolute top-full bg-white w-[13rem] md:w-[15.5rem] lg:w-[21rem] xl:w-[30rem]">
              {searchSuggestions.map((suggestion, index) => (
                <li key={index} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
                  {suggestion}
                </li>
              ))}
        </ul>}
       
      
        
      </div>
      {/*profile*/}
      <div className="flex flex-row items-center justify-end" >
      <img 
      className="h-8 mx-4"
      alt="profile" src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"/>
      </div>
    </div>
  )
}

export default Header

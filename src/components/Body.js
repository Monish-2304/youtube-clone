import React ,{useState}from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { fetchVideosByCategory } from '../utils/constants' 
import WatchPage from './WatchPage'
import {  Routes,Route,useNavigate } from 'react-router-dom'
const Body = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const handleCategoryClick = async (category) => {
    try {
      const data = await fetchVideosByCategory(category);

      if (!data.ok) {
        throw new Error(`Failed to fetch. Status: ${data.status}`);
      }

      const json = await data.json();
      setVideos(json.items);
      navigate("/",{ replace: true });
    } catch (error) {
      console.error(`Error fetching ${category} videos:`, error);
    }
  };

  return (
    <div className="flex">
     <div className="hidden md:mr-6 md:block"> <Sidebar handleCategoryClick={handleCategoryClick}/>
      </div>
      
      
      <Routes>
        <Route path="/" element={<MainContainer videos={videos} />} />
        <Route path="/watch" replace="true" element={<WatchPage />} />
      </Routes>
   
     
    </div>
  )
}

export default Body;

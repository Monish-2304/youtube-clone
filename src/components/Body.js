import React ,{useState}from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { fetchVideosByCategory } from '../utils/constants'
const Body = () => {
  const [videos, setVideos] = useState([]);

  const handleCategoryClick = async (category) => {
    try {
      const data = await fetchVideosByCategory(category);

      if (!data.ok) {
        throw new Error(`Failed to fetch. Status: ${data.status}`);
      }

      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error(`Error fetching ${category} videos:`, error);
    }
  };

  return (
    <div className="flex">
     
      <div className="hidden md:mr-6 lg:block"> <Sidebar handleCategoryClick={handleCategoryClick}/>
      </div>
  
      <MainContainer videos={videos}/>
    </div>
  )
}

export default Body;

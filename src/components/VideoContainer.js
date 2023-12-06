
import React, { useState } from 'react'
import { useEffect } from 'react';
import { YOUTUBE_VIDEOS_API,MUSIC_CATEGORY_API } from '../utils/constants'
import VideoCard from './VideoCard';

const VideoContainer = ({mvideos}) => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    if(mvideos.length>0){
      setVideos(mvideos);
    }else{
    getVideos();
    }
  },[mvideos]);
 
  const getVideos= async () =>{
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
  
      if (!data.ok) {
        throw new Error(`Failed to fetch. Status: ${data.status}`);
      }
      const json = await data.json();
      setVideos(json.items); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

 
  return (
    <div className="sm:flex sm:flex-col md:justify-center xl:justify-start md:flex md:flex-row flex-wrap overflow-hidden">
      {videos.map(video=><VideoCard key={video.id} info={video}/>)}
    </div>
  )
};

export default VideoContainer;


import React, { useState } from 'react'
import { useEffect } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = ({mvideos}) => {
  let isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
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
    <div className={`sm:flex sm:flex-col md:flex md:flex-row md:justify-start flex-wrap overflow-hidden lg:max-w-4xl ${isMenuOpen?'md:max-w-xl lg:max-w-6xl':'md:max-w-3xl lg:max-w-screen-2xl'}`}>
     {videos.map(video=>
     <VideoCard key={video.id} info={video}/>)}
    </div> 
  )
};

export default VideoContainer;

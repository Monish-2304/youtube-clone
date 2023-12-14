
import React, { useState } from 'react'
import { useEffect } from 'react';
import { YOUTUBE_VIDEOS_API ,MORE_VIDEOS_API} from '../utils/constants'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import axios from 'axios';
const VideoContainer = ({mvideos}) => {

  let isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  const [videos,setVideos]=useState([]);
  const [pageToken, setPageToken] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(mvideos.length>0){
      setVideos(mvideos);
    }else{
    getVideos();
    }
  },[mvideos]);
 
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const url = `${MORE_VIDEOS_API}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&pageToken=${pageToken}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
      const response = await axios.get(url);
      console.log("Request URL:", `${MORE_VIDEOS_API}?pageToken=${pageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
      setVideos([...videos, ...response.data.items]); // Append new videos to the existing list
      setPageToken(response.data.nextPageToken); // Update the page token for the next request
     
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
    setLoading(false);
  };

  
  const getVideos= async () =>{
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
  
      if (!data.ok) {
        throw new Error(`Failed to fetch. Status: ${data.status}`);
      }
      const json = await data.json();
      setVideos(json.items); 
      setPageToken(json.nextPageToken);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrollBottom = scrollHeight - scrollTop - clientHeight;
      if (scrollBottom < 100 && !loading && pageToken !== '') {
        fetchVideos(); 
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageToken]);
  
 
 
  return (
    <div className={`sm:flex sm:flex-col md:flex md:flex-row md:justify-start flex-wrap overflow-hidden lg:max-w-4xl ${isMenuOpen?'md:max-w-xl lg:max-w-6xl':'md:max-w-3xl lg:max-w-screen-2xl'}`}>
     {videos.map(video=>
     <VideoCard key={video.id} info={video}/>)}
    </div> 
  )
};

export default VideoContainer;

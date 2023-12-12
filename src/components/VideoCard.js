import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {
  
  
    if (!info || !info.snippet) {
        return null; 
      }
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;

  //count views
   let viewCount=statistics.viewCount;
   let viewCountString="";
   if(viewCount<=999){
    viewCountString+=viewCount;
   }else if(viewCount<1000000){
    viewCount=(viewCount/1000).toFixed(1);
    viewCountString=viewCountString+viewCount+"K";
   }else{
    viewCount=(viewCount/1000000).toFixed(1);
    viewCountString=viewCountString+viewCount+"M"
   }
   

   
  return (
   
    <div className="w-screen-md mb-3 md:m-1 md:p-2 md:max-w-[calc(25%-1rem)]  ">
    <Link to={`watch?v=${info.id}`} >
    <img alt='thumbnail' src={thumbnails.medium.url} className="md:rounded-md w-full cursor-pointer"
      />
      <ul className="text-sm mt-1">
        <li className="font-bold cursor-pointer max-w-sm">{(title.length>60)?title.slice(0,60)+' ...':title} </li>
        <div className="flex flex-row md:flex-col flex-wrap items-center md:justify-start md:items-start">
        <li className="mr-2 md:mr-1">{channelTitle}</li>
        <li><img className="h-1.5 mr-2 md:mr-1 md:hidden" alt='dot' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png' /></li>
        <li className="font-semibold">{viewCountString} views</li>
        </div>
       
      </ul>
    </Link>
     
    </div>
  )
}

export default VideoCard;

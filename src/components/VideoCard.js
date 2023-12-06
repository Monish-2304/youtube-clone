import React from 'react'

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
    <div className="w-screen-sm m-1 p-2 md:max-w-[calc(25%-1rem)]  ">
      <img alt='thumbnail' src={thumbnails.medium.url} className="rounded-md w-full cursor-pointer"/>
      <ul className="text-sm mt-1">
        <li className="font-bold">{(title.length>65)?title.slice(0,65)+' ...':title}</li>
        <li>{channelTitle}</li>
        <li>{viewCountString} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;

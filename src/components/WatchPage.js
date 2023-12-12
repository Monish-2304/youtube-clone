import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
const WatchPage = () => {
  const [searchParams]=useSearchParams();
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch(closeMenu());
    },[dispatch])
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  return (
    <div className={`flex xs:max-w-xs sm:max-w-screen-2xl md:max-w-3xl lg:max-w-3xl ${isMenuOpen?'md:max-w-screen-md xl:max-w-screen-lg':'md:max-w-screen-3xl xl:max-w-screen-xl'}  mt-14`}>
    <iframe className="w-screen h-[13rem] md:w-[28rem] md:h-[18rem] lg:w-[50rem] lg:h-[30rem]"   src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"></iframe>
    </div>
  )
}

export default WatchPage

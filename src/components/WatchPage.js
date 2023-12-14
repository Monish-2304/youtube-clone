import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
 
  useEffect(() => {
    dispatch(closeMenu());
   
  }, [dispatch, videoId]);

  return (
    <div
      className={`flex flex-col xs:max-w-xs sm:max-w-screen-2xl md:max-w-3xl lg:max-w-3xl ${
        isMenuOpen
          ? "md:max-w-screen-md xl:max-w-screen-lg"
          : "md:max-w-screen-3xl xl:max-w-screen-xl"
      }  mt-14`}
    >
    {/* video display  */}
      <iframe
        className="w-screen h-[13rem] md:w-[28rem] md:h-[18rem] lg:w-[40rem] lg:h-[25rem] xl:w-[50rem] xl:h-[28rem]"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
      ></iframe>
{/* comments */}
<div className="max-w-screen md:max-w-md lg:max-w-lg xl:max-w-3xl">
<Comments videoId={videoId} />
</div>

    </div>
  );
};

export default WatchPage;

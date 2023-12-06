import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = ({videos}) => {

  return (
    <div className="flex flex-col justify-start relative">
    <ButtonList/>
    <VideoContainer mvideos={videos}/>
    </div>
  )
}

export default MainContainer;

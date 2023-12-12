import React,{useEffect} from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/appSlice';

const MainContainer = ({videos}) => {
 
  const dispatch=useDispatch();
    useEffect(()=>{
dispatch(openMenu());
    },[dispatch])
  return (
    <div className="flex flex-col w-full">
    <ButtonList/>
    <VideoContainer mvideos={videos}/>
    </div>
  )
}

export default MainContainer;

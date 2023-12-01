import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch =useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-1 my-2 shadow-lg items-center">
      {/*hamburger menu and logo*/}
      <div className="flex flex-row col-span-1 items-center">
        <img
         onClick={()=>toggleMenuHandler()}
         className="h-8 mx-1 cursor-pointer hidden sm:block"
         alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <img 
        className="h-12"
        alt="logo" src=" https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
      </div>
       {/*search*/}
      <div className="flex flex-row sm:col-span-0 md:grid-cols-1 md:col-span-10 md:px-6 items-center">
        <input className="sm:pr-2 sm:pl-2 w-full md:w-1/2 h-8 p-1 md:px-3 border border-gray-600 rounded-l-full " type="text" placeholder='Search'/>
        <button className=" md:p-2 h-8 px-1 md:px-2 border border-gray-500 rounded-r-full bg-gray-50">
          <img className="h-4" alt='search' src='https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg?w=2000'/>
        </button>
      </div>
      {/*profile*/}
      <div className="flex flex-row items-center justify-end" >
      <img 
      className="h-8 mx-4"
      alt="profile" src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"/>
      </div>
    </div>
  )
}

export default Header

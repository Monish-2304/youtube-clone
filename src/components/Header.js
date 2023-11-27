import React from 'react'

const Header = () => {
  return (
    <div className="grid grid-flow-col p-1 my-2 shadow-lg items-center">
      {/*hamburger menu and logo*/}
      <div className="flex col-span-1 items-center">
        <img
         className="h-8 mx-1"
         alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <img 
        className="h-12 "
        alt="logo" src=" https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
      </div>
       {/*search*/}
      <div className="flex col-span-10 px-10 items-center">
        <input className="w-1/2 h-8 px-3 border border-gray-600 rounded-l-full " type="text" placeholder='Search'/>
        <button className="p-2 h-8 px-4 border border-gray-500 rounded-r-full bg-gray-50">
          <img className="h-4" alt='search' src='https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png'/>
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

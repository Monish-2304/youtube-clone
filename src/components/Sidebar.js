import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className="p-3 h-[85vh] w-44 border border-2 overflow-y-scroll custom-scrollbar hidden sm:block">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-2">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Show More</li>
      </ul>
      <h1 className="font-bold pt-2">Subscriptions</h1>
      <ul>
        <li>Chai aur Code</li>
        <li>Namaste React</li>
        <li>Take You Forward</li>
        <li>Code Help</li>
        <li>Free Code Camp</li>
      </ul>
      <h1 className="font-bold pt-2">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar

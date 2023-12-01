import React from 'react'
import Button from './Button'
import { useState,useRef } from 'react';

const ButtonList = () => {
  const buttonLists=["All","Gaming","React.Js","Virat Kohli","Programming","Live","Music","Latest Trailers","Movies"]
  const [selectedItem, setSelectedItem] = useState("All");
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const listRef = useRef(null);
  //handle active state of categories
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    console.log(itemName);
  };

 //handle scroll of categories
  const handleScroll = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      const isAtStart = scrollLeft === 0;
      const isAtEnd = scrollLeft + clientWidth === scrollWidth;

      setShowLeftButton(!isAtStart);
      setShowRightButton(!isAtEnd);
    }
  };

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -100, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 100, 
        behavior: 'smooth',
      });
    }
  };
  return (

<div className="max-w-[22rem] md:max-w-3xl flex flex-row">
      {/*left arrow button*/}
      <button className={`px-4 py-0.5 ml-2 my-3 bg-transparent rounded-lg ${showLeftButton ? 'hover:bg-gray-400' : 'hidden'}`} 
       onClick={scrollLeft}>&lt;</button>

      {/*categories */}
      <div className="   whitespace-nowrap overflow-hidden">
      <ul ref={listRef} className="flex flex-row overflow-x-scroll hide-scrollbar"  onScroll={handleScroll}>
      {buttonLists.map((btnName, index) => (
            <Button
              key={index}
              name={btnName}
              onClick={() => handleItemClick(btnName)}
              className={`px-4 py-0.5 ml-2 my-3 rounded-lg ${
                selectedItem === btnName ? "bg-gray-400" : " bg-gray-200"
              }`}
            />
          ))}
      </ul>
      </div>

      {/*right arrow button*/}
      <button className={`px-4 py-0.5 ml-2 my-3 bg-transparent rounded-lg ${showRightButton ? 'hover:bg-gray-400' : 'hidden'}`}
       onClick={scrollRight}
      >&gt;</button>  
    </div>
  )
}

export default ButtonList

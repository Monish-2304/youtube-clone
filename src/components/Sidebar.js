import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const Sidebar = ({handleCategoryClick}) => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    const handleExploreClick = (category,item) => {
      if(category.title=="Home"||category.title=="Explore"){
      handleCategoryClick(item);
      }
      setSelectedItem(item);
    };
    
   const navClick=(category)=>{
    setSelectedItem(category);
   }
   
  const menuItems = [
    {
      title: 'Home',
      list: ['Home', 'Shorts', 'Subscriptions']
    },
    {
      title: 'You',
      list: ['History', 'Your Videos', 'Watch Later', 'Liked Videos', 'Show More']
    },
    {
      title: 'Subscriptions',
      list: ['Chai aur Code', 'Namaste React', 'Take You Forward', 'Code Help', 'Free Code Camp']
    },
    {
      title: 'Explore',
      list: [
        'Trending',
        'Shopping',
        'Music',
        'Entertainment',
        'Gaming',
        'News',
        'Sports',
        'Learning',
      ]
    }
  ];
  return (
    <div className="p-3 md:h-[40vh] lg:h-[70vh] xl:h-[85vh] w-48 border border-2 overflow-y-hidden sm:block mt-12 hover:overflow-y-auto">
    {menuItems.map((section, index) => (
      <div key={index}>
        <h1 className="font-bold pt-2">{section.title}</h1>
        <ul>
          {section.list.map((item, idx) => (
            <li
              key={idx}
              className={`cursor-pointer ${
                selectedItem === item ? 'p-1 bg-gray-200 rounded-lg text-black' : 'p-1'
              }`}
              onClick={() => handleExploreClick(section,item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default Sidebar

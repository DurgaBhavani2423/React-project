
// import './Navbar.css'
// import menu_icon from '../../assets/menu.png'
// import vicon from '../../assets/vicon.jpg'
// import search_icon from '../../assets/search.png'
// import upload_icon from '../../assets/upload.png'
// import more_icon from '../../assets/more.png'
// import notification_icon from '../../assets/notification.png'
// import profile from '../../assets/profile.jpg'
// import { Link } from 'react-router-dom'
// import { FaGoogle } from "react-icons/fa";
// import { IoSettingsOutline ,IoHelpCircleOutline} from "react-icons/io5";
// import { MdOutlineFeedback } from "react-icons/md";




// import { useState } from 'react';


// const Navbar = ({ setsidebar }) => {
//   const [showInfo, setShowInfo] = useState(false);

//   const handleClick = () => {
//     setShowInfo(!showInfo);
//   };

//   return (
//     <nav className='flex-div'>
//       <div className='nav-left flex-div'>
//         <img
//           className='menu-icon'
//           onClick={() => setsidebar(prev => !prev)}
//           src={menu_icon}
//           alt=""
//           width={30}/>

//         <Link to='/'>
//           <img className='icon' src={vicon} alt="" width={100} />
//         </Link>
//       </div>

//       <div className="nav-middle flex-div">
//         <div className="search-box flex-div">
//           <input type="text" placeholder='Search'/>
//           <img src={search_icon} alt="" />
//         </div>
//       </div>
      
//       <div className="nav-right flex-div">
//         <img src={upload_icon} alt="" />
//         <img src={more_icon} alt="" />
//         <img src={notification_icon} alt="" />
        
//         <div className="profile-container" onClick={handleClick}>
//           <img src={profile} className='user-icon' alt="" />
         
//           {showInfo && (
//             <div className="profile-info">
//               <img src={profile} className='user-icon' alt="" />
//               <p className='font'>Durga</p>
//               <h5 className='font'>durga2423@gmail.com</h5>
              
//               <hr/>
//               <span><p className='font'> <FaGoogle/> Google Account</p></span>
//               <p className='font'><IoSettingsOutline/> Settings</p>
//               <p className='font'><IoHelpCircleOutline/> Help</p>
//              <p className='font'><MdOutlineFeedback /> Feedback</p>
            
//             </div>
//           )}

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//2 nav bar 

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import vtubeicon from '../../assets/vtube.jpg';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";

const Navbar = ({ setsidebar }) => {
  const [query, setQuery] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  const fetchVideos = async (searchQuery) => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'f29af735ebmsh41fc02d1ba8128fp11eb7ejsn8a0197108d22',
        'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
      }
    };

    const queryParams = new URLSearchParams({
      query: searchQuery,
      lang: 'en',
      order_by: 'this_month',
      country: 'us'
    });

    const url = `https://youtube-v2.p.rapidapi.com/search/?${queryParams.toString()}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.videos;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (query) {
      const videos = await fetchVideos(query);
      navigate('/search', { state: { videos, query } });
    }
  };

  return (
    <div>
      <nav className='flex-div'>
        <div className='nav-left flex-div'>
          <img
            className='menu-icon'
            onClick={() => setsidebar((prev) => (prev === false ? true : false))}
            src={menu_icon}
            alt=""
            width={30}
          />
          <Link to='/'>
            <img className='youtubeicon' src={vtubeicon} alt="" width={100} />
          </Link>
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input
              type="text"
              placeholder='Search'
              value={query}
              onChange={handleChange}
            />
            <img
              src={search_icon}
              alt=""
              onClick={handleSearch}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="nav-right flex-div">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          <div className="profile-container" onClick={handleClick}>
            <img src={profile} className='user-icon' alt="" />
            {showInfo && (
              <div className="profile-info">
                <img src={profile} className='user-icon' alt="" />
                <p className='font'>Durga</p>
                <h5 className='font'>durga2423@gmail.com</h5>
                <hr />
                <span><p className='font'> <FaGoogle /> Google Account</p></span>
                <p className='font'><IoSettingsOutline /> Settings</p>
                <p className='font'><IoHelpCircleOutline /> Help</p>
                <p className='font'><MdOutlineFeedback /> Feedback</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

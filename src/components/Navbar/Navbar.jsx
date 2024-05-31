
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import vicon from '../../assets/vicon.jpg'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { IoSettingsOutline ,IoHelpCircleOutline} from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";




import { useState } from 'react';


const Navbar = ({ setsidebar }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img
          className='menu-icon'
          onClick={() => setsidebar(prev => !prev)}
          src={menu_icon}
          alt=""
          width={30}/>

        <Link to='/'>
          <img className='icon' src={vicon} alt="" width={100} />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search'/>
          <img src={search_icon} alt="" />
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
              <p>Sophia</p>
              <h5>Sophiajohn@2423</h5>
              
              <hr/>
              <span><p> <FaGoogle/> Google Account</p></span>
              <p><IoSettingsOutline/> Settings</p>
              <p><IoHelpCircleOutline/> Help</p>
             <p><MdOutlineFeedback /> Feedback</p>
            
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

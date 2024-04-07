
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import youtubeicon from '../../assets/youtubeicon.jpg'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'



const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menu_icon} alt=""width={30}/>
           
            <Link to='/'> <img className='youtubeicon' src={youtubeicon} alt="" width={100}/></Link>
        </div>
        <div className="nav-middle flex-div">

            <div className="search-box flex-div">
            <input type="text" placeholder='Search'/>
            <img src= {search_icon} alt="" />
            </div>
           
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile} className='user-icon' alt="" />
        </div>

    </nav>
  )
}

export default Navbar
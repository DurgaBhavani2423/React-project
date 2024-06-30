
import './sidebar.css'




import { IoMdHome ,IoLogoGameControllerB} from "react-icons/io";
import { MdSportsBasketball } from "react-icons/md";
import { LiaTvSolid } from "react-icons/lia";
import { BsTools } from "react-icons/bs";
import { IoMusicalNotes } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { FaRegNewspaper,FaCarRear } from "react-icons/fa6";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";


const Sidebar = ({sidebar,category,setcategory}) => {

  return (
    
   < div className= {`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setcategory(0)}>
               
                <IoMdHome className='img'/><p>Home</p>

            </div>
            <div className={`side-link ${category===20?"active":""}`}  onClick={()=>setcategory(20)}>
               
                <IoLogoGameControllerB className='img'/><p>Gaming</p>

            </div>
            <div className={`side-link ${category===2?"active":""}`}  onClick={()=>setcategory(2)}>
               
                < FaCarRear className='img'/><p>Automobiles</p>

            </div>
            <div className={`side-link ${category===17?"active":""}`}  onClick={()=>setcategory(17)}>
                
               <MdSportsBasketball className='img'/> <p>Sports</p>

            </div>
            <div className={`side-link ${category===24?"active":""}`}  onClick={()=>setcategory(24)}>
               
               <LiaTvSolid className='img'/> <p>Entertainment</p>

            </div>
            <div className={`side-link ${category===28?"active":""}`}  onClick={()=>setcategory(28)}>
               
                <BsTools className='img'/><p>Technology</p>

            </div>
            <div className={`side-link ${category===10?"active":""}`}  onClick={()=>setcategory(10)}>
                
                <IoMusicalNotes className='img'/>
                <p>Music</p>

            </div>
            <div className={`side-link ${category===22?"active":""}`}  onClick={()=>setcategory(22)}>
              
                <FaBlog className='img'/><p>Blogs</p>

            </div>
            <div className={`side-link ${category===25?"active":""}`}  onClick={()=>setcategory(25)}>
                
               <FaRegNewspaper className='img'/> <p>News</p>

            </div>
            <hr/>
        </div>

        <div className="list">
        <div >
                <IoSettingsOutline className='img'/><span className='s1'> Settings</span>
            </div>
        
            <div  >
                <IoHelpCircleOutline className='img'/><span className='s1'> Help</span>
            </div>
           
            <div  >
              <MdOutlineFeedback className='img'/> <span className='s1'> FeedBack</span>
            </div>
            
        </div>

    </div>
  )
}

export default Sidebar
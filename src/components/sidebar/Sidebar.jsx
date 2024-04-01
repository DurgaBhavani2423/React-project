
import './sidebar.css'

// import home from '../../assets/home.png'
// import game_icon from '../../assets/game_icon.png'
// import automobiles from '../../assets/automobiles.png'
// import sports from '../../assets/sports.png'
// import entertainment from '../../assets/entertainment.png'
// import tech from '../../assets/tech.png'
// import music from '../../assets/music.png'
// import blogs from '../../assets/blogs.png'
// import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import { IoMdHome ,IoLogoGameControllerB} from "react-icons/io";
import { MdSportsBasketball } from "react-icons/md";
import { LiaTvSolid } from "react-icons/lia";
import { BsTools } from "react-icons/bs";
import { IoMusicalNotes } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { FaRegNewspaper,FaCarRear } from "react-icons/fa6";



const Sidebar = ({sidebar,category,setcategory}) => {

  return (
    
   < div className= {`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setcategory(0)}>
                {/* <img src={home} alt="" /> */}
                <IoMdHome className='img'/><p>Home</p>

            </div>
            <div className={`side-link ${category===20?"active":""}`}  onClick={()=>setcategory(20)}>
                {/* <img src={game_icon} alt="" />  */}
                <IoLogoGameControllerB className='img'/><p>Gaming</p>

            </div>
            <div className={`side-link ${category===2?"active":""}`}  onClick={()=>setcategory(2)}>
                {/* <img src={automobiles} alt="" /> */}
                < FaCarRear className='img'/><p>Automobiles</p>

            </div>
            <div className={`side-link ${category===17?"active":""}`}  onClick={()=>setcategory(17)}>
                {/* <img src={sports} alt="" /> */}
               <MdSportsBasketball className='img'/> <p>Sports</p>

            </div>
            <div className={`side-link ${category===24?"active":""}`}  onClick={()=>setcategory(24)}>
                {/* <img src={entertainment} alt="" /> */}
               <LiaTvSolid className='img'/> <p>Entertainment</p>

            </div>
            <div className={`side-link ${category===28?"active":""}`}  onClick={()=>setcategory(28)}>
                {/* <img src={tech} alt="" /> */}
                <BsTools className='img'/><p>Technology</p>

            </div>
            <div className={`side-link ${category===10?"active":""}`}  onClick={()=>setcategory(10)}>
                {/* <img src={music} alt="" /> */}
                <IoMusicalNotes className='img'/>
                <p>Music</p>

            </div>
            <div className={`side-link ${category===22?"active":""}`}  onClick={()=>setcategory(22)}>
                {/* <img src={blogs} alt="" /> */}
                <FaBlog className='img'/><p>Blogs</p>

            </div>
            <div className={`side-link ${category===25?"active":""}`}  onClick={()=>setcategory(25)}>
                {/* <img src={news} alt="" /> */}
               <FaRegNewspaper className='img'/> <p>News</p>

            </div>
            <hr/>
        </div>
        <div className="subscribe-list">
            <h3>Subscribe</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>punith</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>mrBeast</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>John</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>minny</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Naynsi</p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
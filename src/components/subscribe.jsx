

import { useState } from "react"
import { FaBell } from "react-icons/fa6";
const Subscribe=()=>{

    const [subscribed, setSubscribed] = useState(true);

    const handlesub=()=>{
        setSubscribed(false)
    }
    const handleunsub=()=>{
        setSubscribed(true)
    }
   
    return(
        <>
       <div>
       {  
            subscribed  ?
            <button onClick={handlesub} style={{backgroundColor:"red"}}>Subscribe</button> 
            :
            <button onClick={handleunsub} style={{backgroundColor:"grey"}}>Subscribed<FaBell/></button>
           
        }
       </div>
       
        </>
    )
}
export default Subscribe ;


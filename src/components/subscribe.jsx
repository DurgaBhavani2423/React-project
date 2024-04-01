

import { useState } from "react"
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
            <button onClick={handleunsub} style={{backgroundColor:"grey"}}>Subscribed</button>
           
        }
       </div>
       
        </>
    )
}
export default Subscribe ;


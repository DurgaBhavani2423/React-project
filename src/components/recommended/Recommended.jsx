
import './Recommended.css'


import { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'
const Recommended = ({categoryId}) => {

    const [apidata,setapidata]= useState([])

    const fetchdata= async ()=>{

        const relatedvideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedvideo_url).then(res=>res.json()).then(data=>setapidata(data.items))
    }

    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <div className='recommended'>
        {
            apidata.map((item,index)=>{
                return(
                    <>
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter( item.statistics.viewCount)}views</p>
                        </div>
                     </Link>
                    </>
                )
            })
        }
        

        

       

        

       

        

       

    </div>
  )
}

export default Recommended
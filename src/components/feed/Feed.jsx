

import './Feed.css'

import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import { useEffect, useState } from 'react'
import moment from 'moment'

const Feed = ({category}) => {

  const [data,setdata] =useState([]);

  const fetchdata= async ()=>{
        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `
        await fetch(videoList_url)
        .then(response=>response.json())
        .then(data=>setdata(data.items))
  }

  useEffect(()=>{
      fetchdata()
  },[category]) 

  return (
    
    <div className='feed'>

      {data.map((item,index)=>{
        return(
          <>
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
        <img key={index}src={item.snippet.thumbnails.medium.url} alt="" />
        <h2>{item.snippet.title} </h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{value_converter(item.statistics.viewCount)} views &bull;  {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
          </>
        )

      })
      }
       

        

    </div>
    
    
  )
}

export default Feed
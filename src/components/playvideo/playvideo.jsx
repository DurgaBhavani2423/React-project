<<<<<<< HEAD



=======
>>>>>>> 1554c3f7a4568dacbdb616f8ff1ef2fe73195763
import './playvideo.css'

import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";

import { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import Subscribe from '../subscribe'

const Playvideo = () => {
    const { videoId } = useParams();

    const [apidata, setapidata] = useState(null);
    const [channeldata, setchanneldata] = useState(null);
    const [commentdata, setcommentdata] = useState([]);
    const [count, setcount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [dislike,setdislike]=useState(false)

    const handlecount = () => {
        if (liked) {
            setcount(prevCount => prevCount - 1); // Decrease count by 1
        } else {
            setcount(prevCount => prevCount + 1); // Increase count by 1
        }
        setLiked(!liked); // Toggle the liked state
    };

    const handledislike = () => {
        setdislike(!dislike); // Toggle the disliked state
    };
    const fetchvideodata = async () => {
        // fetching video data
        const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        const videoResponse = await fetch(videodetails_url);
        const videoData = await videoResponse.json();
        const videoInfo = videoData.items[0];
        setapidata(videoInfo);
        setcount(parseInt(videoInfo.statistics.likeCount, 10));  // Initialize count with the like count
    };

    const fetchotherdata = async () => {
        if (!apidata) return;

        // fetching channel data
        const channeldataurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
        const channelResponse = await fetch(channeldataurl);
        const channelData = await channelResponse.json();
        setchanneldata(channelData.items[0]);

        // fetching comment data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        const commentResponse = await fetch(comment_url);
        const commentData = await commentResponse.json();
        setcommentdata(commentData.items);
    };

    useEffect(() => {
        fetchvideodata();
    }, [videoId]);

    useEffect(() => {
        fetchotherdata();
    }, [apidata]);

    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{apidata ? apidata.snippet.title : "title here"}</h3>
            <div className="play-video-info">
                <p>{apidata ? value_converter(apidata.statistics.viewCount) : "15K"} views &bull; {apidata ? moment(apidata.snippet.publishedAt).fromNow() : "2 days ago"}</p>
                <div>
                    <span>
                        <BiLike 
                            className='like' 
                            onClick={handlecount} 
                            style={{ color: liked ? 'blue' : 'black' }} // Change color when liked
                        />
                        {count}
                    </span>
                    <span>
                        <BiDislike className='dislike' 
                         onClick={handledislike} 
                         style={{ color: dislike ? 'blue' : 'black' }} />
                    </span>
                    <span><IoIosShareAlt className='icons' />share</span>
                    <span><MdOutlineSaveAlt className='icons' />save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channeldata ? channeldata.snippet.thumbnails.default.url : ""} alt="" />

                <div>
                    <p>{apidata ? apidata.snippet.channelTitle : ""}</p>
                    <span>{channeldata ? value_converter(channeldata.statistics.subscriberCount) : "1M"} Subscribers</span>
                </div>
                <Subscribe />
            </div>
            <div className="vid-description">
                <p>{apidata ? apidata.snippet.description.slice(0, 250) : "Description here"}</p>
                <hr />
                <h4>{apidata ? value_converter(apidata.statistics.commentCount) : "113"} Comments</h4>
                {/* comment data here */}
                {commentdata.map((item, index) => (
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span> {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p> {item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <BiLike className='icons' />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <BiDislike className='icons' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playvideo;


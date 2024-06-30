import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SearchResults.css';
const SearchResults = () => {
  const location = useLocation();
  const { videos, query } = location.state || { videos: [], query: '' };

  return (
    <div className=' .play-video'>
      <h2>Search Results for: {query}</h2>
      <div className='feed1'>
        {videos.map((items, index) => {
          const { title, number_of_views, video_id, categoryId, id } = items;
          return (
            <Link to={`video/${categoryId}/${id}`} className='card1' key={index}>
              <iframe
                src={`https://www.youtube.com/embed/${video_id}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                width="320"
                height="240"
              ></iframe>
              <h3>{title}</h3>
              <p>{number_of_views} views</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;

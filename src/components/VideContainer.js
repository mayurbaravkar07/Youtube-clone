import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { Link } from 'react-router-dom';
const VideContainer = () => {
  const [videos,setVideos]=useState([]);
  
  useEffect(()=>{
    getVideos();

  },[])

  const getVideos=async ()=>{
    const data =await fetch(YOUTUBE_VIDEO_API);
    const json =await data.json();
    setVideos(json.items);
    

  }

  return (
    <div  className="flex flex-wrap">
      {videos.map(video=><Link key={video.id} to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}></VideoCard></Link>)}
    </div>
  )
}

export default VideContainer

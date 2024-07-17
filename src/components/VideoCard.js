import React from 'react';

const VideoCard = ({ info }) => {

  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
    <img  className="rounded-lg" src={thumbnails?.medium?.url} alt={title} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-medium">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    
    </div>
  );
}

export default VideoCard;

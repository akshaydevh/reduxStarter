import React from 'react';
import VideoListItem from './video_list_items'

const VideoList = (props) =>{
   const videoItems = props.videos.map((video)=>{
        return (<VideoListItem 
        key={video.etag} 
        video={video} 
        onVideoSelect={props.onVideoSelect}
        />)
    });

    return (
        <ul className ="col-md-4 list_group">
        {videoItems}
        </ul>
    );
};
export default VideoList;
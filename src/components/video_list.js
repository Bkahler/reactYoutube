import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const videoItems = props.videos.map((video) =>{
		return(
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	});

	return(
		<ul className="col-md-12 col-xs-12 col-sm-12 col-lg-4 list-group reds">
			{videoItems}
		</ul>
	)
}


export default VideoList;
import React from 'react';

// normal way with out es6 syntactic sugar
// const VideoListItem = (props) =>{
// 	const video = props.video;
// }

const VideoListItem = ({video, onVideoSelect}) =>{	
	// console.log(video.snippet.title)
	const title = video.snippet.title;
	const imageUrl = video.snippet.thumbnails.default.url;

	return(
		<li onClick={()=>onVideoSelect(video)} className='list-group-item reds'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={imageUrl} />
				</div>
				<div className='media-body'>
					<div className='media-heading'>{title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;
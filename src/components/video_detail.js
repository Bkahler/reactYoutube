import React from 'React';
import strftime from 'strftime';

const VideoDetail = ({video}) =>{
	if (!video){
		return( <div> Loading... </div>)
	}
	const videoId = video.id.videoId;
	const url     = `https://www.youtube.com/embed/${videoId}`;
	const date    = strftime('%B %d, %y %H:%M:%S', new Date(video.snippet.publishedAt));

	return(
		<div className='video-detail col-lg-8 col-md-12 col-sm-12 col-xs-12 reds'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div className='detail-date'>{date}</div>
				<div className='detail-title'>{video.snippet.title}</div>
				<div className='detail-description'>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail
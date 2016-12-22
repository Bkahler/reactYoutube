// in js6 this is how you import modules into different files
// React and ReactDOM are 2 separate libaries, that work togehter. 
// ReactDOM handles the interaction with the DOM while react handles the creation of components

import React, {Component} from 'react';
import _                  from 'lodash';
import ReactDOM           from 'react-dom';
import SearchBar          from './components/search_bar';
import VideoList          from './components/video_list';
import VideoDetail        from './components/video_detail';
import YouTubeSearch      from 'youtube-api-search';


const API_KEY = 'AIzaSyB9I2IAY0nR3pe_TTgB9h77LMq4CrGr3Kg'//process.env.YOUTUBEAPI
var container = document.querySelector('.container');


// This is the ES6 shortcut for declaring functions(beware that the 'this' keyword behaves diferently)
class App extends Component{ 

	constructor(props){
		super(props);
		this.state= { 
			videos:[],
			selectedVideo: null
		 };	
		this.videoSearch('are aliens real')
	}

	videoSearch(term){
		console.log(term)
		YouTubeSearch({key:API_KEY, term: term }, (videos) =>{
			console.log('Calling YouTube API');

			this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			})
		})	
	}

	render(){
		const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 500)

		return(
			<div className="container">
				<div className='main-brand'> ReactTube </div> 
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
 
}

// A instance of the component must be passed to ReactDOM.
// Wrapping the component in JSX tags, creates and instance of the component.
// When rendering, pass the component instance and the target DOM Element.
ReactDOM.render(<App />, container);
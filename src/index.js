'use strict';
// in js6 this is how you import modules into different files
// React and ReactDOM are 2 separate libaries, that work togehter. 
// ReactDOM handles the interaction with the DOM while react handles the creation of components

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YouTubeSearch from 'youtube-api-search';
const API_KEY = process.env.YOUTUBEAPI
var container = document.querySelector('.container');


// This is the ES6 shortcut for declaring functions(beware that the 'this' keyword behaves diferently)
class App extends Component{ 

	constructor(props){
		super(props);
		this.state= { videos:[] };

		YouTubeSearch({key:API_KEY, term:'Aliens'}, (videos) =>{
			console.log('Calling YouTube API');
			this.setState={ videos } // Es6 syntactic sugar...if the key and variable are the same name, you can just include the variable name in the new object
		})		
	}

	render(){
		return(
			<div> 
				<SearchBar />
			</div>
		);
	}
 
}

// A instance of the component must be passed to ReactDOM.
// Wrapping the component in JSX tags, creates and instance of the component.
// When rendering, pass the component instance and the target DOM Element.
ReactDOM.render(<App />, container);
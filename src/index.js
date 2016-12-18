'use strict';
// in js6 this is how you import modules into different files
// React and ReactDOM are 2 separate libaries, that work togehter. 
// ReactDOM handles the interaction with the DOM while react handles the creation of components

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YouTubeSearch from 'youtube-api-search';
const API_KEY = process.env.YOUTUBEAPI

var container = document.querySelector('.container');

// This section creates a react component
// const App = function(){
// 	return <div>Hello World !</div>;
// }

// This is the ES6 shortcut for declaring functions(beware that the 'this' keyword behaves diferently)
const App = () => { 
	return(
		<div> 
			<SearchBar />
		</div>
	); 
}

// A instance of the component must be passed to ReactDOM.
// Wrapping the component in JSX tags, creates and instance of the component.
// When rendering, pass the component instance and the target DOM Element.
ReactDOM.render(<App />, container);
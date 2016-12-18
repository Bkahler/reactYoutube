import React, { Component } from 'react';

class SearchBar extends Component{
	//This is the default constructor method for any js object.
	// Here we call the superclass and pass the props to it.
	// The state property is added to the object.
	constructor(props){
		super(props);
		this.state = { searchTerm:'' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	render(){
		return(
			<div>
				<input
				 value={this.state.searchTerm} 
				 onChange={ this.onInputChange } />
				 
				<p>Value of the input:{ this.state.searchTerm } </p>
			</div>
		);
	}

	onInputChange(event){
		this.setState( { searchTerm: event.target.value } );
		console.log( event.target.value );
	}

};

export default SearchBar;
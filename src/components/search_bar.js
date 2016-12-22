import React, { Component } from 'react';

class SearchBar extends Component{
	//This is the default constructor method for any js object.
	// Here we call the superclass and pass the props to it.
	// The state property is added to the object.
	constructor(props){
		super(props);
		this.state = { term:'' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	render(){
		return(
			<div className="search-bar col-xs-12 col-sm-12 col-md-10" >
				<input
				 placeholder="search"
				 value={this.state.term} 
				 onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
		console.log(term);
	}

};

export default SearchBar;
import React, { Component } from 'react';

const Navbar = (props)=>{
	return(
		<div className='container'>
		<nav className="navbar navbar-default">
		  <div className="container-fluid reds">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">
		      	<div className='main-brand'> ReactTube 
		      		<img alt="Brand" className='brand-icon' 
		        	 src={require('../../public/img/video-play-xxl.png')}/>
		      	</div> 
		      </a>
		    </div>
		  </div>
		</nav>
		</div>
	);
};

export default Navbar;
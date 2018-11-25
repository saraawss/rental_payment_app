import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    	
    	 
    	<div className="col-2 sidenav"> 
	    	<div >
	    	Rental Payment
	    	
	    	<nav className="padding-top-30">
		        <Link to='/home'>Home</Link>
		        <Link to='/user-list'>Users</Link>
	        </nav>
	    	</div>
    	</div>
    	
   
    );
  }
}

export default Header;

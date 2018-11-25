import React, { Component } from 'react';
import '../style/App.css';
import RentalList from '../components/Table/rental-list';

import SideBar from '../components/Nav/sidebar';
import RentalManager from '../components/Manager/rental-manager';
import Main from '../components/Manager/main';



class App extends Component {
	
	constructor(){
        super();

        this.state = {
            id: ''
        };
    }
	
  render() {
    return (
    	
    	
    	
    	<div className="col-12">
    	<div className="row">
	    	<div className="col-2">
	    	<SideBar />
	    	</div>
    	
	    	<div className="col-10 padding-top-60 padding-bottom-20">
	    	<Main />
	    	</div>
	    </div>
    	</div>
    	
    );
  }
}

export default App;

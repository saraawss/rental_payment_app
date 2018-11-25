import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

//Passing Lease Id using Search Button
class Search extends Component {
	
  constructor(props) {
        super(props);
        
        this.state = {
                error: 'hide-alert'
        };

        this.onSearch = this.onSearchById.bind(this);
        this.onSearchById = this.onSearchById.bind(this);
  }
  
  //Passing Lease Id to get Rental List
  async onSearchById(rental_id){
	  
	  if(this.refs.id.value == ''){
		  
		  await this.setState({ error: 'show-alert' });
	  }else{
		  await this.setState({ error: 'hide-alert' });
		  await this.props.onSearch(this.refs.id.value);
	  }
	  	  
  }
  
	
  render() {
	
	  
    return (
    		<div>
    		<Alert error={this.state.error}/>
	    	<div className="input-group mb-3">
	    	  <input type="text" className="form-control" placeholder="Enter Lease Id" aria-label="Enter Lease Id" aria-describedby="basic-addon2" ref="id"></input>&nbsp;
	      	  <button className="btn btn-outline-secondary" type="button" onClick={this.onSearchById}>Search</button>
	      	</div>
	      	</div>
   
    );
  }
}

const Alert = (props) => {
	const error = props.error;

	    return (
	    		<div className={error}>
	    		<div className="alert alert-danger" role="alert">
	    		  Please Enter Lease Id
	    		</div>
	    		</div>
	   
	    );
	  
}

Search.propTypes = {
	    onSearch: PropTypes.func
};


export default Search;

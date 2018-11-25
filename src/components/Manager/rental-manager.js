import React, { Component } from 'react';
import * as axios from 'axios';
const PaymentService = require('../../services/rental-list.service');
import {BrowserRouter, Route} from 'react-router-dom';

import RentalList from '../Table/rental-list';
import Search from '../SearchButton/search-filter';

class RentalManager extends Component {
	
	constructor(props) {
        super(props);
        
        this.state = {
        	payment_list: []
        };
        
        this.listPayments = this.listPayments.bind(this);

    }
	
	componentDidMount() {
	
		if(this.props.match.params && this.props.match.params.id !== 'undefined'){
	
			this.listPayments(this.props.match.params.id);
		}
	}
	
	//Get Rental List using api
	listPayments(rental_id) {
			
		if(typeof(rental_id) != 'undefined'){
			
			PaymentService
	            .findLeasePaymentLIst(rental_id)
	            .then(payment_list => {
	            	this.setState({payment_list});
	                return;
	            })
	            .catch(error => {
	                console.log(error);
	                return;
	            });
		}
    }
	
  render() {
    return (
    		
    		<div className="col-10 container">
	    		<Search  onSearch={this.listPayments} />
	          	<RentalList payment_list={this.state.payment_list}/>
      		</div>
   
    );
  }
}

export default RentalManager;

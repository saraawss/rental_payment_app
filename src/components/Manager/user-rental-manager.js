import React, { Component } from 'react';
import * as axios from 'axios';
const PaymentService = require('../../services/rental-list.service');
import {BrowserRouter, Route} from 'react-router-dom';

import UserRentalList from '../Table/user-rental-list';
import Search from '../SearchButton/search-filter';

class UserRentalManager extends Component {
	
	constructor(props) {
        super(props);
        
        this.state = {
            payment_list: []
        };
        
        this.listPayments = this.listPayments.bind(this);

    }
	
	componentDidMount() {
		this.listPayments();
	}
	
	//Get Rental List using api
	listPayments() {
		
		PaymentService
            .findLeasePayments()
            .then(payment_list => {
            	
                this.setState({payment_list});
                return;
            })
            .catch(error => {
                console.log(error);
                return;
            });
    }
	
  render() {
    return (
    		
    		<div className="col-10 container">
	    		<UserRentalList payment_list={this.state.payment_list} onUserList={this.listPayments}/>
      		</div>
   
    );
  }
}

export default UserRentalManager;

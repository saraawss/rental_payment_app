import React, { Component } from 'react';
import * as axios from 'axios';
const PaymentService = require('../../services/rental-list.service');
const Utils = require('../../logics/utils');
import { Redirect } from 'react-router-dom';

//Displaying Lease Payments in a Table
const UserRentalList = (props) => {	
	
	const payment_list = props.payment_list;
	
	const onGetPaymentDetails = (id) => {
		
		window.location.pathname = '/home/'+id;
	}
	
		
	const paymentRows = payment_list.map(rent => {

        return (
        		
        	<tr key={rent.id.toString()}>
        	  <td>{(rent.id)}</td>
		      <td>{(rent.tenant)}</td>
		      <td><button type="button" className="btn btn-primary" onClick={() => onGetPaymentDetails(rent.id)} >View</button></td>
		    </tr>

        );
    });

    return (
    		
    	<table className="table table-striped">
  		  <thead>
  		    <tr>
  		      <th scope="col">Id</th>
  		      <th scope="col">Tenant</th>
  		      <th scope="col">Details</th>
  		    </tr>
  		  </thead>
  		  <tbody>
  		  		{paymentRows}
  		
  		  </tbody>
  		</table>
   
    );
  
}



export default UserRentalList;
